import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../../support/world';

Given('I navigate to login page {string}',
    async function (this: PlaywrightWorld, url: string) {
        await this.page.goto(url);
    });


When('I login with username {string} and password {string}',
    async function (this: PlaywrightWorld, username: string, password: string) {
        await this.page.locator('#user-name').fill(username);
        await this.page.locator('#password').fill(password);
    });

When('I click the {string} button',
    async function (this: PlaywrightWorld, buttonText: string) {
        await this.page.getByRole('button', { name: buttonText }).click();
    });

Then('I should see title for {string}',
    async function (this: PlaywrightWorld, text: string) {
        const titleElement = this.page.locator('[data-test="title"]');
        await titleElement.waitFor();
        await expect(titleElement).toContainText(text.trim());
    });