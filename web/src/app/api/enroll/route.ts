import { existsSync, promises as fs } from "fs";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

type Payload = {
  firstName: string;
  lastName: string;
  level: string;
  subjects: string[];
  message: string;
  email: string;
};

async function appendToSheet(data: Payload) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!clientEmail || !privateKey || !spreadsheetId) return;

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const values = [[
    new Date().toISOString(),
    data.firstName,
    data.lastName,
    data.level,
    data.subjects.join(", "),
    data.email,
    data.message,
  ]];
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Enrollments!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: { values },
  });
}

async function sendEmails(data: Payload) {
  const host = process.env.EMAIL_HOST;
  const port = Number(process.env.EMAIL_PORT || 587);
  const secure = String(process.env.EMAIL_SECURE || "false") === "true";
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const admin = process.env.ADMIN_EMAIL || user;
  if (!host || !user || !pass || !admin) return;

  const transport = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });

  // Acknowledgement to student
  await transport.sendMail({
    from: `Cours Particuliers <${user}>`,
    to: data.email,
    subject: "Votre demande d’inscription",
    text: `Bonjour ${data.firstName},\n\nMerci pour votre intérêt. Nous revenons vers vous très rapidement.\n\nRécapitulatif :\n- Niveau : ${data.level}\n- Discipline(s) : ${data.subjects.join(", ")}\n\nMessage :\n${data.message}\n\nBien cordialement,\nCours Particuliers`,
  });

  // Notification to admin
  await transport.sendMail({
    from: `Cours Particuliers <${user}>`,
    to: admin,
    subject: "Nouvelle demande d’inscription",
    text: `Nouvelle demande de ${data.firstName} ${data.lastName} <${data.email}>\nNiveau : ${data.level}\nDiscipline(s) : ${data.subjects.join(", ")}\nMessage :\n${data.message}`,
  });
}

async function appendToCsv(data: Payload) {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "enrollments.csv");
  await fs.mkdir(dataDir, { recursive: true });
  const header = "timestamp,firstName,lastName,level,subjects,email,message\n";
  if (!existsSync(filePath)) {
    await fs.writeFile(filePath, header, "utf8");
  }
  const escape = (v: string) => '"' + v.replace(/"/g, '""').replace(/[\n\r]+/g, " ") + '"';
  const row = [
    new Date().toISOString(),
    data.firstName,
    data.lastName,
    data.level,
    data.subjects.join(", "),
    data.email,
    data.message,
  ]
    .map((v) => escape(String(v)))
    .join(",") + "\n";
  await fs.appendFile(filePath, row, "utf8");
}

export async function POST(req: Request) {
  try {
    const json = (await req.json()) as Payload;
    if (!json.firstName || !json.lastName || !json.level || !json.subjects?.length || !json.message || !json.email) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const hasSheets = Boolean(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY &&
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    );
    if (hasSheets) {
      await appendToSheet(json);
    } else {
      await appendToCsv(json);
    }

    await Promise.allSettled([sendEmails(json)]);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
