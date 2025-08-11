import { existsSync, promises as fs } from "fs";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email?: string; };
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "newsletter.csv");
    await fs.mkdir(dataDir, { recursive: true });
    const header = "timestamp,email\n";
    if (!existsSync(filePath)) {
      await fs.writeFile(filePath, header, "utf8");
    }
    const row = `"${new Date().toISOString()}","${email.replace(/"/g, '""')}"\n`;
    await fs.appendFile(filePath, row, "utf8");

    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT || 587);
    const secure = String(process.env.EMAIL_SECURE || "false") === "true";
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    if (host && user && pass) {
      const transport = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
      await transport.sendMail({
        from: `Cours Particuliers <${user}>`,
        to: email,
        subject: "Abonnement à la newsletter",
        text: "Merci pour votre abonnement à notre newsletter mensuelle !",
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
