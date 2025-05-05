import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

export class PlaywrightWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  _consoleLogs: string[] = [];

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async getPageData(): Promise<any> {
    if (this.page) {
      return {
        url: this.page.url(),
        title: await this.page.title()
      };
    }
    return null;
  }

  async destroy(): Promise<void> {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(PlaywrightWorld);