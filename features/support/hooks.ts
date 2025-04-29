import { Before, After } from '@cucumber/cucumber';
import { PlaywrightWorld } from './world';
import { chromium, Browser, Page } from '@playwright/test';

Before(async function (this: PlaywrightWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: PlaywrightWorld) {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
})