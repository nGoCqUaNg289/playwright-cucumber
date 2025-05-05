// pages/base-page.ts
import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ====================
  // Navigation Methods
  // ====================
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async reloadPage(): Promise<void> {
    await this.page.reload();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  // ====================
  // Element Interaction
  // ====================
  protected async click(locator: string | Locator): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.click();
  }

  protected async fill(locator: string | Locator, text: string): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.fill(text);
  }

  protected async type(locator: string | Locator, text: string, delay = 100): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.type(text, { delay });
  }

  protected async selectOption(locator: string | Locator, value: string): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.selectOption(value);
  }

  // ====================
  // Element State
  // ====================
  protected async isVisible(locator: string | Locator): Promise<boolean> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    return element.isVisible();
  }

  protected async isEnabled(locator: string | Locator): Promise<boolean> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    return element.isEnabled();
  }

  protected async isChecked(locator: string | Locator): Promise<boolean> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    return element.isChecked();
  }

  // ====================
  // Waits
  // ====================
  protected async waitForElement(
    locator: string | Locator,
    state: 'attached' | 'detached' | 'visible' | 'hidden' = 'visible',
    timeout = 10000
  ): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.waitFor({ state, timeout });
  }

  protected async waitForUrl(url: string | RegExp, timeout = 10000): Promise<void> {
    await this.page.waitForURL(url, { timeout });
  }

  // ====================
  // Assertions
  // ====================
  protected async verifyUrl(expectedUrl: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  protected async verifyText(
    locator: string | Locator,
    expectedText: string | RegExp
  ): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await expect(element).toHaveText(expectedText);
  }

  protected async verifyCount(
    locator: string | Locator,
    expectedCount: number
  ): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await expect(element).toHaveCount(expectedCount);
  }

  // ====================
  // Screenshots
  // ====================
  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `screenshots/${name}-${new Date().toISOString().replace(/[:.]/g, '-')}.png`,
      fullPage: true
    });
  }

  // ====================
  // Advanced Interactions
  // ====================
  protected async hover(locator: string | Locator): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.hover();
  }

  protected async pressKey(key: string): Promise<void> {
    await this.page.keyboard.press(key);
  }

  protected async uploadFile(locator: string | Locator, filePath: string): Promise<void> {
    const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
    await element.setInputFiles(filePath);
  }
}