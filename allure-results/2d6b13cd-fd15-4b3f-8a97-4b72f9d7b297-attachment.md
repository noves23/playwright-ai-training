# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> should have API_URL environment variable
- Location: tests\example.spec.ts:5:5

# Error details

```
Error: expect(received).toBeDefined()

Received: undefined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const env = process.env;
  4  | 
  5  | test('should have API_URL environment variable', async () => {
> 6  |   expect(env.API_URL).toBeDefined();
     |                       ^ Error: expect(received).toBeDefined()
  7  |   console.log(`API_URL: ${env.API_URL}`);
  8  | });
  9  | 
  10 | test('has title', async ({ page }) => {
  11 |   await page.goto(API_URL);
  12 | 
  13 |   // Expect a title "to contain" a substring.
  14 |   await expect(page).toHaveTitle(/Playwright/);
  15 | });
  16 | 
  17 | test('get started link', async ({ page }) => {
  18 |   await page.goto(API_URL);
  19 | 
  20 |   // Click the get started link.
  21 |   await page.getByRole('link', { name: 'Get started' }).click();
  22 | 
  23 |   // Expects page to have a heading with the name of Installation.
  24 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  25 | });
  26 | 
```