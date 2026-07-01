import { test, expect } from '@playwright/test';
import env from '../env/env.json';
import {AddItemPage} from "../src/ui/AddItemPage";
import path from 'path';

test('upload file via button', async ({ page }) => {
  const fileChooserPromise = page.waitForEvent('filechooser');

  await page.getByRole('button', { name: 'Select data' }).click();

  const fileChooser = await fileChooserPromise;

  await fileChooser.setFiles('src\\fixtures\\files\\QA plan.pdf');

  await expect(page.getByText('QA plan.pdf')).toBeVisible();
});
