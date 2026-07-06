import { test, expect } from '@playwright/test';
import { environments } from '../../config/env';

const env = environments.integration; // Change to the desired environment (integration or abnahme)

test('should have API_URL environment variable', async () => {
  console.log(`API_URL: ${env.API_URL}`);
});

test('has title', async ({ page }) => {
  await page.goto(env.API_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has incorrect title', async ({ page }) => {
  await page.goto(env.API_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright_123/);
});

test('get started link', async ({ page }) => {
  await page.goto(env.API_URL);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
