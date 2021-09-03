// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    {
      name: 'Desktop Safari',
      use: {
        browserName: 'webkit',
        viewport: { width: 1200, height: 750 },
        screenshot: 'only-on-failure',
        timeout: 60000,
        viewport: { width: 1920, height: 1080 },
        screenshot: 'only-on-failure',
        video: 'retry-with-video',
        
      }
    },
    // Test against mobile viewports.
    // {
    //   name: 'Mobile Chrome',
    //   use: devices['Pixel 5'],
    //   screenshot: 'only-on-failure',
    //   timeout:6000,
      
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    //   screenshot: 'only-on-failure',
    //   timeout: 6000,
    // },
    {
      name: 'Desktop Firefox',
      use: {
        browserName: 'firefox',
        viewport: { width: 800, height: 600 },
        screenshot: 'only-on-failure',
        timeout: 60000,
        viewport: { width: 1920, height: 1080 },
        screenshot: 'only-on-failure',
        video: 'retry-with-video',
      }
      
    },
  ],
};

module.exports = config;
