import { test, expect } from '@playwright/test';
import env from '../env/env.json';
import {AddItemPage} from "../src/ui/AddItemPage";
import path from 'path';

test('upload file', async ({ page }) => {
  //C:\playwriteTraining\playwright-fi\src\fixtures\files\QA plan.pdf
  const filePath = path.join(__dirname, 'test-data', 'QA plan.pdf');

  await page.locator('input[type="file"]').setInputFiles(filePath);

  // Verify upload succeeded
  await expect(page.locator('.uploaded-file-name'))
    .toHaveText('QA plan.pdf');
});