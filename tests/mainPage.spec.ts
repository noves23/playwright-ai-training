import { test, expect } from '@playwright/test';
import env from '../env/env.json';
import {AddItemPage} from "../src/ui/AddItemPage";

  const itemData = {
    brand: 'Toyota',
    model: 'Camry',
    date: '2023-06-01',
    mileage: '10000',
    color: 'Blue',
  };


test('Add and validate new Item', async ({ page }) => {
  const addItemPage = new AddItemPage(page);
  await addItemPage.navigateTo(env.ITEM_URL);

  await addItemPage.addItem(
    itemData.brand,
    itemData.model,
    itemData.date,
    itemData.mileage,
    itemData.color
  );

  await addItemPage.validateItemAdded(
    itemData.brand,
    itemData.model,
    itemData.date,
    itemData.mileage,
    itemData.color
  );

});

test('Update existing Item and validate changes', async ({ page }) => {
  const addItemPage = new AddItemPage(page);
  await addItemPage.navigateTo(env.ITEM_URL);

  await addItemPage.editItem(
    'Toyota',
    'Camry',
    '2023-06-01',
    '15000',
    'Red'
  );

    await addItemPage.validateItemAdded(
    'Toyota',
    'Camry',
    '2023-06-01',
    '10000',
    'Blue'
  );

});

test('Delete existing Item and validate changes', async ({ page }) => {
  const addItemPage = new AddItemPage(page);
  await addItemPage.navigateTo(env.ITEM_URL);

  //to be implemented

});
