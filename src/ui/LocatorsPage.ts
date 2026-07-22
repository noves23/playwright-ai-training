
import type { Page } from '@playwright/test';

declare const page: Page;

class LocatorsPage {

  get editButton() {
    return page.getByRole('button', { name: 'Edit' }).first();
  }

  get usernameInput() {
    return page.getByRole('textbox', { name: 'Username' });
  }

  get passwordInput() {
    return page.getByRole('textbox', { name: 'Password' });
  }

  get loginButton() {
    return page.getByRole('button', { name: 'Login' });
  }
}

export default new LocatorsPage();
