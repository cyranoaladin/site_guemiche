import { readJsonFile, writeJsonFile } from '@/lib/storage';

export type Credits = Record<string, number>; // key: email, value: hours

export async function getCredits(): Promise<Credits> {
  return readJsonFile<Credits>('credits.json', {});
}

export async function addCredits(email: string, hours: number): Promise<void> {
  const data = await getCredits();
  const current = data[email] || 0;
  data[email] = current + hours;
  await writeJsonFile('credits.json', data);
}
