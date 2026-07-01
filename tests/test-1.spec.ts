import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.getByRole('switch', { name: 'Toggle' }).uncheck();
  await page.getByRole('switch', { name: 'Toggle' }).check();
  await page.getByRole('button', { name: 'Cancel' }).click();
});