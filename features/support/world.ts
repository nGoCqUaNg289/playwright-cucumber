import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { AllureCucumberTestRuntime } from 'allure-cucumberjs';

export class PlaywrightWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async destroy(): Promise<void> {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(PlaywrightWorld);