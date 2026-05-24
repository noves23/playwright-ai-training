import { test, expect } from '@playwright/test';
import env from '../env/env.json';

test('should have API_URL environment variable', async () => {
  console.log(`API_URL: ${env.API_URL}`);
});

test('has title', async ({ page }) => {
  await page.goto(env.API_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto(env.API_URL);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
