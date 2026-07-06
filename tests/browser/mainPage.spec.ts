import { test, expect } from '@playwright/test';
//import env from '../env/env.json';
import { environments } from '../../config/env';
import {AddItemPage} from "../../src/ui/AddItemPage";
import {Item} from "../../src/types";

const env = environments.integration; // Change to the desired environment (integration or abnahme)

  const itemData: Item = {
    brand: 'Toyota',
    model: 'Camry',
    date: '2023-06-01',
    mileage: '10000',
    color: 'Blue',
    validPermission: true
  };


test('Add and validate new Item @smoke', async ({ page }) => {
  const addItemPage = new AddItemPage(page);
  await addItemPage.navigateTo(env.ITEM_URL);

  await addItemPage.addItem(
    itemData.brand,
    itemData.model,
    itemData.date,
    itemData.mileage,
    itemData.color,
    itemData.validPermission
  );

  await addItemPage.validateItemAdded(
    itemData.brand,
    itemData.model,
    itemData.date,
    itemData.mileage,
    itemData.color,
    itemData.validPermission
  );

});

test('Failing validation for a new Item', async ({ page }) => {
  const addItemPage = new AddItemPage(page);
  await addItemPage.navigateTo(env.ITEM_URL);

  await addItemPage.addItem(
    itemData.brand,
    itemData.model,
    itemData.date,
    itemData.mileage,
    itemData.color,
    itemData.validPermission
  );

  await addItemPage.validateItemAdded(
    itemData.brand,
    itemData.model,
    itemData.date,
    itemData.mileage,
    itemData.color,
    !itemData.validPermission
  );

});

test('Update existing Item and validate changes', async ({ page }) => {
  const addItemPage = new AddItemPage(page);
  await addItemPage.navigateTo(env.ITEM_URL);

  await addItemPage.editItem(
    'Toyota',
    'Camry',
    '2023-06-01',
    '10000',
    'Blue',
    true
  );

    await addItemPage.validateItemAdded(
    'Toyota',
    'Camry',
    '2023-06-01',
    '10000',
    'Blue',
    true
  );

});

test('Delete existing Item and validate changes', async ({ page }) => {
  const addItemPage = new AddItemPage(page);
  await addItemPage.navigateTo(env.ITEM_URL);

  await addItemPage.deleteItem();

});

