import {expect, Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage";
import LocatorsPage from "./LocatorsPage";

export class LoginPage extends BasePage {

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async login(username: string, password: string): Promise<void> {
        await LocatorsPage.usernameInput.fill(username);
        await LocatorsPage.passwordInput.fill(password);
        await LocatorsPage.loginButton.click();
    }


}