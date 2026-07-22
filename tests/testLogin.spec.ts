import { test, expect } from '@playwright/test';
import { environments } from '../config/env';
import { LoginPage } from '../src/ui/LoginPage';

const env = environments.integration;
const loginPage = new LoginPage();

test('First test', async ({ page }) => {
  await page.goto(env.ITEM_URL);
  await loginPage.login(env.LoginUser.username, env.LoginUser.password);
});

test('Second test', async ({ page }) => {
  await page.goto(env.ITEM_URL);


});