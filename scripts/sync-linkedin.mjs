#!/usr/bin/env node

/**
 * LinkedIn Profile Sync Script
 * 
 * Usage: npm run sync
 * 
 * Fetches data from LinkedIn public profile and updates local JSON files.
 * Requires Puppeteer to be installed: npm install puppeteer
 * 
 * For now, this is a template that guides you through the process.
 * In the future, this can be automated with a LinkedIn API key.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "src", "data");

console.log(`
╔══════════════════════════════════════════════════════════╗
║           LinkedIn Profile Sync Tool                    ║
║                                                         ║
║  Aby zsynchronizować dane z LinkedIn:                   ║
║                                                         ║
║  1. Wejdź na swój profil LinkedIn                       ║
║  2. Skopiuj dane (doświadczenie, edukację)              ║
║  3. Wklej je do odpowiednich plików w src/data/         ║
║                                                         ║
║  Pliki do edycji:                                       ║
║    - src/data/profile.json      (dane osobowe)          ║
║    - src/data/education.json    (kursy i szkolenia)     ║
║    - src/data/experience.json   (doświadczenie)         ║
║    - src/data/achievements.json (osiągnięcia)           ║
║    - src/data/trips.json        (wyjazdy)               ║
║                                                         ║
║  Po edycji uruchom: npm run build                       ║
╚══════════════════════════════════════════════════════════╝
`);

// Funkcja pomocnicza do walidacji pliku JSON
function validateJSON(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    JSON.parse(data);
    console.log(`  ✓ ${path.basename(filePath)} - valid JSON`);
    return true;
  } catch (err) {
    console.log(`  ✗ ${path.basename(filePath)} - error: ${err.message}`);
    return false;
  }
}

// Sprawdź wszystkie pliki danych
console.log("\n  Sprawdzanie plików danych...\n");

const files = [
  "profile.json",
  "education.json",
  "experience.json",
  "achievements.json",
  "trips.json",
];

let allValid = true;
for (const file of files) {
  const filePath = path.join(dataDir, file);
  if (fs.existsSync(filePath)) {
    if (!validateJSON(filePath)) {
      allValid = false;
    }
  } else {
    console.log(`  - ${file} - nie znaleziono (utwórz go ręcznie)`);
  }
}

if (allValid) {
  console.log("\n  ✓ Wszystkie pliki danych są poprawne!\n");
} else {
  console.log("\n  ⚠ Niektóre pliki wymagają uwagi.\n");
}

// W przyszłości: automatyczne pobieranie danych przez API LinkedIn
// const LINKEDIN_ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
// if (LINKEDIN_ACCESS_TOKEN) {
//   const response = await fetch('https://api.linkedin.com/v2/me', {
//     headers: { Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}` }
//   });
//   const data = await response.json();
//   // ... update local files
// }
