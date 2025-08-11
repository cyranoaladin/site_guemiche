import { promises as fs } from "fs";
import path from "path";

async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  await fs.mkdir(dataDir, { recursive: true });
  return dataDir;
}

export async function readJsonFile<T>(file: string, fallback: T): Promise<T> {
  const dir = await ensureDataDir();
  const fp = path.join(dir, file);
  try {
    const content = await fs.readFile(fp, "utf8");
    return JSON.parse(content) as T;
  } catch {
    return fallback;
  }
}

export async function writeJsonFile<T>(file: string, data: T): Promise<void> {
  const dir = await ensureDataDir();
  const fp = path.join(dir, file);
  const content = JSON.stringify(data, null, 2);
  await fs.writeFile(fp, content, "utf8");
}
