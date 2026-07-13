import { test, expect } from '@playwright/test';

test('test which should pass @regression', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/accessibility-testing');
  expect(await page.title()).toBe('Playwright');
});