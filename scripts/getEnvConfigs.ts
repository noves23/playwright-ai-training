import * as fs from 'fs';

function sleep(ms: number): void {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function checkFileExistsSync(filePath: string, attemps: number = 5, interval: number = 1000): boolean {
  let fileExists = false;
  for (let i = 0; i < attemps; i++) {
    fileExists = fs.existsSync(filePath);
    if (fileExists) {
      return true;
    }
    sleep(interval);
  }
  return false;
}

export function getConfiguration(): Record<string, string> {
  const envFilePath = './env/env.json';

  if (!checkFileExistsSync(envFilePath)) {
    throw new Error(`File not found: ${envFilePath}`);
  }

  const envContent = fs.readFileSync(envFilePath, 'utf8');
  return JSON.parse(envContent);
}