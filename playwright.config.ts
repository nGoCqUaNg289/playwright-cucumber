import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  testDir: './features',
  testMatch: '**/*.feature',
  projects: [
    {
      name: 'cucumber',
      testMatch: '**/*.feature',
      use: { browserName: 'chromium' },
    },
  ],
};

export default config;