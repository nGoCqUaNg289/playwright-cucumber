import { Before, After, Status } from '@cucumber/cucumber';
import { PlaywrightWorld } from './world';
import { chromium } from '@playwright/test';

Before(async function (this: PlaywrightWorld) {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  
  this._consoleLogs = [];
  this.page.on('console', msg => {
    this._consoleLogs.push(`${msg.type()}: ${msg.text()}`);
  });
  
});

After(async function (this: PlaywrightWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    if (this.page) {
      try {
        const screenshot = await this.page.screenshot({ type: 'png', fullPage: true });
        this.attach(screenshot, 'image/png');
      } catch (error) {
        console.error('Không thể chụp screenshot:', error);
      }
    }
    
    if (this._consoleLogs && this._consoleLogs.length > 0) {
      this.attach('Console Logs:\n' + this._consoleLogs.join('\n'), 'text/plain');
    }
    
    if (this.page) {
      try {
        const html = await this.page.content();
        this.attach('Page HTML:', 'text/html');
        this.attach(html, 'text/html');
      } catch (error) {
        console.error('Không thể lấy HTML của trang:', error);
      }
    }
  }
  
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});