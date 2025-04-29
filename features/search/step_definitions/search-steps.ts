import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../../support/world';

Given('I navigate to {string}', async function (this: PlaywrightWorld, url: string) {
  await this.page.goto(url);
});

When('I type {string} into the search box', async function (this: PlaywrightWorld, text: string) {
  await this.page.locator('textarea[name="q"]').fill(text);
});

When('I press the {string} key', async function (this: PlaywrightWorld, key: string) {
  await this.page.keyboard.press(key);
});

Then('I should see search results for {string}', async function (this: PlaywrightWorld, text: string) {
  const results = await this.page.locator('#search').textContent();
  expect(results).toContain(text);
});