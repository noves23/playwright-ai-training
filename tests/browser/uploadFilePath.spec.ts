import { test, expect } from '@playwright/test';
import env from '../env/env.json';
import {UploadPage} from "../../src/ui/UploadPage";
import path from 'path';

test('upload file via button', async ({ page }) => {
  const uploadPage = new UploadPage(page);

  await uploadPage.navigateTo(env.ITEM_URL);

  await page.getByRole('button', { name: 'Select data' }).nth(0).click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles(`QA plan.pdf`);
  await page.getByRole('button', { name: 'Upload' }).click();

  //const fileChooserPromise = page.waitForEvent('filechooser');
  //const fileChooser = await fileChooserPromise;

  //await fileChooser.setFiles('src\\fixtures\\files\\QA plan.pdf'); 

  //await expect(page.getByText('QA plan.pdf')).toBeVisible();
});
