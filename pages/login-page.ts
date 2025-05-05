import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {

  private readonly usernameInput = '#user-name';
  private readonly passwordInput = '#password';
  private readonly loginButton = (buttonText: string) => 
    this.page.getByRole('button', { name: buttonText });
  private readonly titleElement = '[data-test="title"]';
  private readonly errorElement = '[data-test="error"]';

  constructor(page: Page) {
    super(page);
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async enterCredentials(username: string, password: string) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
  }

  async clickButton(buttonText: string) {
    await this.loginButton(buttonText).click();
  }

  async verifyTitle(expectedText: string) {
    const title = this.page.locator(this.titleElement);
    await title.waitFor();
    await expect(title).toContainText(expectedText.trim());
  }

  async verifyErrorMessage(expectedText: string) {
    const title = this.page.locator(this.errorElement);
    await title.waitFor();
    await expect(title).toContainText(expectedText.trim());
  }
}