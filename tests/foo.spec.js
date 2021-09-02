const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');  
const { PlaywrightDevPage } = require('./playwright-dev-page');

let browser;

test.beforeAll( () => {
  console.log("TestBeforeAll")
});

test.beforeEach(async ({ page }) => {
  browser = await chromium.launch();
  page = await browser.newPage();
});



test ('Check to have product on the page', async ({page}) => {
  const productPage = new PlaywrightDevPage(page);
  //Open the link
  await productPage.goto();
  await page.screenshot({path: `screens/init.png`, fullPage: true});
  await page.waitForTimeout(4000);
  //Click on the search filed
  await productPage.clickOnSearch();
  await page.screenshot({path: `screens/click.png`, fullPage: false});
  //Enter the 'Nike' text in the search filed
  await productPage.enterText();
  await page.screenshot({path: `screens/fill.png`, fullPage: true});
  //Press on the keyword 'Enter'
  await productPage.pressSubmitButton();
  await page.screenshot({path: `screens/enter.png`, fullPage: true});
  //Check if expected productoc is on the page
  await expect(page).toHaveURL('https://answear.ua/ru/k/vona?q=Nike');
  await productPage.waitForAnElement();
  await expect(page.locator('(//img[@alt="Nike Sportswear - Брюки"])[1]')).toHaveAttribute('alt', 'Nike Sportswear - Брюки');
  //Close the browser
  
});

test ('Check error message for login page', async ({page}) => {
  const loginPage = new PlaywrightDevPage(page);

  //Open the link
  await loginPage.goto();
  await page.screenshot({path: `screens/init.png`, fullPage: true});
  await page.waitForTimeout(4000);
  //Click on the Account icon
  await loginPage.waitForAnElement2();
  await loginPage.clickAccountIcon();
  await page.screenshot({path: `screens/click.png`, fullPage: false});
  //Wait for UserName filled
  await loginPage.waitForUsernameField();
  await page.screenshot({path: `screens/userNameWait.png`, fullPage: true});
  //Click on the button "Submit"
  await loginPage.clickOnTheButtonSubmit();
  await page.screenshot({path: `screens/afterClick.png`, fullPage: true});
  //Check if the error messages appear under the fields "Email", "Pasword"
  await expect(page.locator("(//span[contains(text(),'Данное поле должно быть заполнено')])[1]")).toBeVisible();
  await expect(page.locator("(//span[contains(text(),'Данное поле должно быть заполнено')])[2]")).toBeVisible();
  //Check if the login page is stil open
  await expect(page).toHaveURL('https://answear.ua/ru/mii-akkaunt/uviity');

  
});


test ('Fake Login', async ({page}) => {
  const loginPage = new PlaywrightDevPage(page);
  //Open the link
  await loginPage.goto();
  await page.screenshot({path: `screens/init.png`, fullPage: true});
  await page.waitForTimeout(4000);
  //Click on the Account icon
  await loginPage.waitForAnElement2();
  await loginPage.clickAccountIcon();
  await page.screenshot({path: `screens/click.png`, fullPage: false});
  //Wait for UserName filled
  await page.screenshot({path: `screens/userNameWait.png`, fullPage: true});
  await loginPage.enterUsername();
  await page.screenshot({path: `screens/add-username.png`, fullPage: false});
  await loginPage.enterPassword();
  await page.screenshot({path: `screens/add-password.png`, fullPage: false});
  await loginPage.clickOnTheButtonSubmit();
  await page.screenshot({path: `screens/click-submit.png`, fullPage: false});
  
});

test.afterEach( () => {
  browser.close();
  
});

test.afterAll(async ( ) => {
  console.log("TestAfterAll")
});

