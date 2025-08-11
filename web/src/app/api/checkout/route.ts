import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: "Stripe non configuré" }, { status: 400 });
    }

    const stripe = await import("stripe").then((m) => new m.default(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2024-06-20" }));

    const priceMap: Record<string, string> = {
      pack_5h: process.env.STRIPE_PRICE_5H || "",
      pack_10h: process.env.STRIPE_PRICE_10H || "",
      pack_20h: process.env.STRIPE_PRICE_20H || "",
    };
    const pack = body.pack || "pack_5h";
    const price = priceMap[pack];
    if (!price) {
      return NextResponse.json({ error: "Pack indisponible" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price, quantity: 1 }],
      success_url: `${siteUrl}/reserver?status=success`,
      cancel_url: `${siteUrl}/reserver?status=cancel`,
      payment_method_types: ["card"],
      metadata: {
        name: body.name || "",
        email: body.email || "",
        pack,
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
