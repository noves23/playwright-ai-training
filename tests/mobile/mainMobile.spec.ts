import { test, devices } from '@playwright/test';

//if only couple of tests needs mobile
test.describe('mobile only', () => {
  test.use(devices['iPhone 15']);

  test('checkout', async ({ page }) => {
    ...
  });
});

//or 
test.use({
  ...devices['iPad Pro 11'],
});

//skip if not mobille like mgp if not testingEU
