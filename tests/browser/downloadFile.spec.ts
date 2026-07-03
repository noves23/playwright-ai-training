import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('copy data and save into local file', async ({ page, context }) => {
  // Required for clipboard access
  await context.grantPermissions([
    'clipboard-read',
    'clipboard-write'
  ]);

  await page.goto('https://your-app-url');

  // Click Copy icon
  await page.getByTestId('copy-icon').click();

  // Verify icon changed to checkmark
  await expect(page.getByTestId('copied-icon')).toBeVisible();

  // Read clipboard content
  const clipboardData = await page.evaluate(async () => {
    return await navigator.clipboard.readText();
  });

  expect(clipboardData).not.toBe('');

  // Save clipboard data into a local file
  const filePath = path.join(__dirname, 'output', 'copied-file.txt');

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, clipboardData);

  // Verify file exists
  expect(fs.existsSync(filePath)).toBeTruthy();

  // Verify saved content
  const savedContent = fs.readFileSync(filePath, 'utf-8');
  expect(savedContent).toBe(clipboardData);
});