import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../../support/world';
import { generateFakePhoneNumber } from '../../utils/test-data';

Given('I navigate to login page {string}', async function (this: PlaywrightWorld, url: string) {
    await this.page.goto(url);
});


When('I type random phone number into the phone number box', 
    async function (this: PlaywrightWorld) {
      const phone = generateFakePhoneNumber();
      const input = this.page.locator('[formcontrolname="phoneNumber"]');
      await input.waitFor({ state: 'visible' });
      await input.fill(phone);
  });

When('I click the {string} button', async function (this: PlaywrightWorld, key: string) {
    // await this.page.getByText('Xác nhận').click();
    await this.page.locator('button#enter-phone').click();
});

Then('I should see title for {string}', async function (this: PlaywrightWorld, text: string) {
    await expect(this.page.locator('p.title'))
        .toContainText(text.trim());
});