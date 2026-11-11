import { cp, mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
const ignored = new Set(['dist', 'node_modules', '.git', '.github', 'scripts', 'README.md', 'WORKFLOW_7_PLATFORM.md', 'FIGMA_HANDOFF.md', 'ANTIGRAVITY_PROMPT.md', 'package.json', 'package-lock.json', '.gitignore', '.env.example', '.env.local']);
await mkdir(out, { recursive: true });
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (ignored.has(entry.name) || entry.name.startsWith('.')) continue;
  await cp(path.join(root, entry.name), path.join(out, entry.name), { recursive: true });
}
const envPath = path.join(root, '.env.local');
let env = {};
try {
  env = Object.fromEntries((await readFile(envPath, 'utf8')).split(/\r?\n/).map(line => line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/)).filter(Boolean).map(([, key, value]) => [key, value.replace(/^['"]|['"]$/g, '')]));
} catch {}
const token = process.env.POSTHOG_PROJECT_TOKEN || env.POSTHOG_PROJECT_TOKEN || '';
const host = process.env.POSTHOG_HOST || env.POSTHOG_HOST || '';
if (token && host) {
  await writeFile(path.join(out, 'rimba-config.js'), `window.RIMBA_ANALYTICS = ${JSON.stringify({ projectToken: token, apiHost: host })};\n`);
  const htmlPath = path.join(out, 'index.html');
  const html = await readFile(htmlPath, 'utf8');
  await writeFile(htmlPath, html.replace('<script src="analytics.js"></script>', '<script src="rimba-config.js"></script>\n    <script src="analytics.js"></script>'));
} else {
  console.log('PostHog belum disetel: build tetap berhasil, analytics tidak aktif. Isi .env.local sebelum build untuk mengaktifkannya.');
}
console.log(`Build selesai: ${out}`);
