import { getSupabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, delta } = await req.json();
  if (!email || typeof delta !== 'number') return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  const supabase = getSupabase();
  if (!supabase) return NextResponse.json({ error: 'Supabase non configuré' }, { status: 500 });
  const { data: profile } = await supabase.from('profiles').select('*').eq('email', email).single();
  const xp = (profile?.xp || 0) + delta;
  const { error } = await supabase.from('profiles').upsert({ email, xp }, { onConflict: 'email' });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, xp });
}
