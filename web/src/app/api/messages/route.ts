import { readJsonFile, writeJsonFile } from "@/lib/storage";
import { NextRequest, NextResponse } from "next/server";

type Message = {
  id: string;
  from: "eleve" | "parent" | "tuteur";
  to: "eleve" | "parent" | "tuteur";
  text: string;
  createdAt: string;
};

export async function GET() {
  const data = await readJsonFile<Message[]>("messages.json", []);
  // tri par date croissante
  data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  return NextResponse.json({ messages: data });
}

export async function POST(req: NextRequest) {
  try {
    const { from, to, text } = await req.json();
    if (!from || !to || !text) {
      return NextResponse.json({ error: "Invalid" }, { status: 400 });
    }
    const data = await readJsonFile<Message[]>("messages.json", []);
    const msg: Message = {
      id: Math.random().toString(36).slice(2),
      from,
      to,
      text,
      createdAt: new Date().toISOString(),
    };
    data.push(msg);
    await writeJsonFile("messages.json", data);
    return NextResponse.json({ ok: true, message: msg });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
