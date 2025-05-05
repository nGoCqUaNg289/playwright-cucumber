// step-definitions/login.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightWorld } from '../support/world';
import { LoginPage } from '../pages/login-page';

Given('I navigate to login page {string}',
  async function (this: PlaywrightWorld, url: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigateTo(url);
  });

When('I login with username {string} and password {string}',
  async function (this: PlaywrightWorld, username: string, password: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.enterCredentials(username, password);
  });

When('I click the {string} button',
  async function (this: PlaywrightWorld, buttonText: string) {
    const loginPage = new LoginPage(this.page);
    await loginPage.clickButton(buttonText);
  });

Then('I should see {string}',
  async function (this: PlaywrightWorld, text: string) {
    const loginPage = new LoginPage(this.page);

    if (text == 'Products') {
      await loginPage.verifyTitle(text);
    } else {
      await loginPage.verifyErrorMessage(text);
    }
  });