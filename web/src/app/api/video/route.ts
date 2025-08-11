import { NextRequest, NextResponse } from 'next/server';

// Whereby rooms API or Jitsi pseudo-link generator
export async function POST(req: NextRequest) {
  try {
    const provider = (process.env.VIDEO_PROVIDER || 'jitsi').toLowerCase();
    if (provider === 'whereby') {
      const apiKey = process.env.WHEREBY_API_KEY;
      if (!apiKey) return NextResponse.json({ error: 'Whereby non configuré' }, { status: 500 });
      const res = await fetch('https://api.whereby.dev/v1/meetings', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ isLocked: false, roomMode: 'normal', endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString() }),
      });
      const data = await res.json();
      if (!res.ok) return NextResponse.json({ error: 'Whereby error', details: data }, { status: 500 });
      return NextResponse.json({ url: data.roomUrl });
    }
    // Jitsi fallback: simple room link on public instance
    const room = `objectif-mention-${Math.random().toString(36).slice(2)}`;
    return NextResponse.json({ url: `https://meet.jit.si/${room}` });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
