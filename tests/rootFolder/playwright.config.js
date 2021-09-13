// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    {
      timeout: 25000,
      retries: 2,
      name: 'Chromium',

      // testMatch: ['baseURL.js'],

      use: {

        baseURL: 'https://answear.ua/ru/c/vona',
        browserName: 'chromium',
        headless: false,
        viewport: { width: 1200, height: 800 },
        screenshot: 'only-on-failure',
        video: 'retry-with-video',

       }
        
      }

   
  ],
  
};

module.exports = config;

