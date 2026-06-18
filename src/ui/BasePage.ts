import {expect, Locator, Page} from "@playwright/test";

export class BasePage {
    
    public readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async validateElementExists(
        elementFinder: string | Locator,
        timeout: number = 5000
    ): Promise<void> {
        const element = typeof elementFinder === "string" ? this.page.locator(elementFinder) : elementFinder;
        await expect(element).toBeVisible({ timeout });
    }

    async validateElementVisible(elementFinder: string | Locator, timeout: number = 5000): Promise<void> {
        const element = typeof elementFinder === "string" ? this.page.locator(elementFinder) : elementFinder;
        await expect(element).toBeVisible({ timeout });
    }

    async clickElement(elementFinder: string | Locator): Promise<void> {
        const element = typeof elementFinder === "string" ? this.page.locator(elementFinder) : elementFinder;
        await element.click();
    }

    async fillInput(elementFinder: string | Locator, value: string): Promise<void> {
        const element = typeof elementFinder === "string" ? this.page.locator(elementFinder) : elementFinder;
        await element.fill(value);
    }

    async checkCheckbox(elementFinder: string | Locator): Promise<void> {
        const element = typeof elementFinder === "string" ? this.page.locator(elementFinder) : elementFinder;
        await element.check();
    }

    async uncheckCheckbox(elementFinder: string | Locator): Promise<void> {
        const element = typeof elementFinder === "string" ? this.page.locator(elementFinder) : elementFinder;
        await element.uncheck();
    }


}