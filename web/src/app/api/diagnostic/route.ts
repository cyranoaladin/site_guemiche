import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { answers } = await req.json();
    const counts = { A: 0, B: 0, C: 0 } as Record<string, number>;
    (answers || []).forEach((a: string) => {
      if (a && counts[a] !== undefined) counts[a]++;
    });
    const max = Math.max(counts.A, counts.B, counts.C);
    let type = "";
    let tip = "";
    if (max === counts.A) { type = "Visuel"; tip = "Utilise des schémas, couleurs, cartes mentales."; }
    else if (max === counts.B) { type = "Auditif"; tip = "Explique à voix haute, enregistre-toi, écoute des cours."; }
    else { type = "Kinesthésique"; tip = "Fais, manipule, multiplie les exercices et cas concrets."; }
    return NextResponse.json({ type, tip });
  } catch (e) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
