

// const { test, expect } = require('@playwright/test');

// test('basic test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const title = page.locator('.navbar__inner .navbar__title');
//   await expect(title).toHaveText('Playwright');
// });

// // example.spec.js
// const { test, expect } = require('@playwright/test');


// test('my test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');

//   // Expect an element "to be visible".
//   await expect(page.locator('text=Learn more').first()).toBeVisible();

//   await page.click('text=Get Started');
//   // Expect some text to be visible on the page.
//   await expect(page.locator('text=System requirements').first()).toBeVisible();

//   // Compare screenshot with a stored reference.
//   expect(await page.screenshot()).toMatchSnapshot('get-started.png');
// });

// example.spec.js
// const { test, expect } = require('@playwright/test');

// test.describe('feature foo', () => {
//   test.beforeEach(async ({ page }) => {
//     // Go to the starting url before each test.
//     await page.goto('https://www.computerhope.com/jargon/d/director.htm');

//   });

//   test('my test', async ({ page }) => {
//     // Assertions use the expect API.
//     await expect(page).toHaveURL('https://www.computerhope.com/jargon/d/director.htm');
//   });
// });

// const { test, expect } = require('@playwright/test');

// test.slow(({ browserName }) => browserName === 'chromium');

// test('basic test', async ({ page }) => {
  
//   await page.goto('https://www.asos.com/');
//   await page.waitForTimeout(4000);
//   console.log("a");
//   await page.screenshot({path: `button.png`, fullPage: true});
//   await page.fill('//input[@id="chrome-search"]', 'Nike');
//   console.log("a");
//   await page.waitForTimeout(4000);
//   await page.press('///input[@id="chrome-search"]','Enter');
//   await page.screenshot({path: `button.png`, fullPage: true});
//   // const title = page.locator('.navbar__inner .navbar__title');
//   // await expect(title).toHaveText('Playwright');
// });


