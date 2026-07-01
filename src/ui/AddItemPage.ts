import {expect, Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class AddItemPage extends BasePage {

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async addItem(
        brand: string,
        model: string,
        date: string,
        mileage: string,
        color: string,
        validPermission: boolean
    ): Promise<void> {
        //togel to verify
        //locators to export.
        await this.page.getByRole('button', { name: 'Add Item' }).click();
        await this.page.getByRole('textbox', { name: 'Brand' }).fill(brand);
        await this.page.getByRole('textbox', { name: 'Title' }).fill(model);
        await this.page.getByRole('textbox', { name: 'Date' }).fill(date);
        await this.page.getByRole('spinbutton', { name: 'Mileage' }).fill(mileage);
        await this.page.getByRole('textbox', { name: 'Color' }).fill(color);
        if (validPermission) {
            await this.page.getByRole('switch', { name: 'Valid Permission' }).check();
        }
        await this.page.click('button[type="submit"]');
    }

    async editItem(
        brand: string,
        model: string,
        date: string,
        mileage: string,
        color: string,
        validPermission: boolean
    ): Promise<void> {
        // Implementation for editing an item
        await this.page.getByRole('button', { name: 'Edit' }).last().click();
        await this.page.getByRole('textbox', { name: 'Brand' }).fill(brand);

        await this.page.click('button[type="submit"]');
    }

    async deleteItem(): Promise<void> {
        await this.page.getByRole('button', { name: 'Delete' }).last().click();
    }

    async validateItemAdded(
        brand: string,
        model: string,
        date: string,
        mileage: string,
        color: string,
        validPermission: boolean
    ): Promise<void> {
        await this.page.getByRole('button', { name: 'Edit' }).last().click();
        const itemsBrand = await this.page.getByRole('textbox', { name: 'Brand' }).inputValue();
        expect(itemsBrand).toBe(brand);
        const itemsModel = await this.page.getByRole('textbox', { name: 'Title' }).inputValue();
        expect(itemsModel).toBe(model);
        const itemsDate = await this.page.getByRole('textbox', { name: 'Date' }).inputValue();
        expect(itemsDate).toBe(date);
        const itemsMileage = await this.page.getByRole('spinbutton', { name: 'Mileage' }).inputValue();
        expect(itemsMileage).toBe(mileage);
        const itemsColor = await this.page.getByRole('textbox', { name: 'Color' }).inputValue();
        expect(itemsColor).toBe(color);
        const itemsValidPermission = await this.page.getByRole('switch', { name: 'Valid Permission' }).isChecked();
        expect(itemsValidPermission).toBe(validPermission);
        await this.page.click('button[type="submit"]');
    }

}