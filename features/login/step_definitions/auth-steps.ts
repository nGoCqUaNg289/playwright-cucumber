import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../../support/world';

Given('I navigate to {string}', async function (this: PlaywrightWorld, url: string) {
    await this.page.goto(url);
});

When('I type {string} into the phone number box', async function (this: PlaywrightWorld, text: string) {
    await this.page.locator('[formcontrolname="phoneNumber"]').waitFor();
    await this.page.locator('[formcontrolname="phoneNumber"]').fill(text);
});

When('I click the {string} button', async function (this: PlaywrightWorld, key: string) {
    await this.page.getByText('Xác nhận').click();
});

Then('I should see title for {string}', async function (this: PlaywrightWorld, text: string) {
    await expect(this.page.locator('p.title'))
    .toContainText(text.trim());
});