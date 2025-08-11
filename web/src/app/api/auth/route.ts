import { getSupabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, role } = await req.json();
  if (!email || !role) return NextResponse.json({ error: 'Invalid' }, { status: 400 });
  const supabase = getSupabase();
  if (!supabase) return NextResponse.json({ error: 'Supabase non configuré' }, { status: 500 });
  // upsert user profile with role: eleve | parent | tuteur
  const { error } = await supabase.from('profiles').upsert({ email, role }, { onConflict: 'email' });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
