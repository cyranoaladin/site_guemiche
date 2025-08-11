import { addCredits } from '@/lib/credits';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!secret) return NextResponse.json({ error: 'Webhook non configuré' }, { status: 400 });

    const raw = await req.text();
    const stripe = await import('stripe').then(m => new m.default(process.env.STRIPE_SECRET_KEY as string, { apiVersion: '2024-06-20' }));
    let event;
    try {
      const sig = req.headers.get('stripe-signature') as string;
      event = stripe.webhooks.constructEvent(raw, sig, secret);
    } catch (err) {
      return new NextResponse('Signature invalide', { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      const email: string | undefined = session?.customer_details?.email || session?.metadata?.email;
      const pack = String(session?.metadata?.pack || 'pack_5h');
      const hours = pack === 'pack_20h' ? 20 : pack === 'pack_10h' ? 10 : 5;
      if (email) await addCredits(email, hours);
    }

    return new NextResponse('ok', { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Erreur webhook' }, { status: 500 });
  }
}

export const config = { api: { bodyParser: false } } as const;
