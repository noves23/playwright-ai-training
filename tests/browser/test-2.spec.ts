import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Select Data' }).first().click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('Zrzut ekranu 2026-06-22 161859.png');
  await page.getByRole('button', { name: 'Upload' }).click();
});