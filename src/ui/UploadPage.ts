import {expect, Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class UploadPage extends BasePage {

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    



}