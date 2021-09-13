





const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright'); 
const { PlaywrightDevPage } = require('./selectors');

test.describe('Test_Answer_Site', () => {
 
  let browser;

  test.beforeAll( () => {
  console.log("TestBeforeAll")
  });
  
  test.beforeEach(async ({ page }) => {
  await page.goto('https://answear.ua/ru/c/vona');
  await page.screenshot({path: `screens/start.png`, fullPage: false});
  browser = await chromium.launch();
  page = await browser.newPage();
  });

  test.afterEach( () => {
  browser.close();
  });
  
  test.afterAll(async ( ) => {
  console.log("TestAfterAll")
  });
  
  
    test ('Check possibility to search on the page', async ({page}) => {
    const productPage= new PlaywrightDevPage(page);
     
    await page.waitForTimeout(4000);
    await productPage.clickOnTheButtonAcceptCookies();
    await productPage.clickOnSearchField();
    await productPage.enterText('Nike');
    await productPage.pressSubmitButton('Enter');
     
    await expect(page).toHaveURL('https://answear.ua/ru/k/vona?q=Nike', { timeout: 5000 });
    await productPage.waitForAnElementSportswear();
    await expect(page.locator('//span[text()="Страница"]')).toBeVisible();
    });
    
    test ('Check error message form the login page', async ({page}) => {
    const loginPage = new PlaywrightDevPage(page);
    await loginPage.clickOnTheButtonAcceptCookies();
    await page.waitForTimeout(4000);
    await loginPage.waitForAccountElement();
    await loginPage.clickOnAccountIcon();
    await loginPage.waitForUsernameField();
    await loginPage.clickOnTheButtonSubmit();
    await expect(page.locator("(//span[contains(text(),'Данное поле должно быть заполнено')])[1]")).toBeVisible();
    await expect(page.locator("(//span[contains(text(),'Данное поле должно быть заполнено')])[2]")).toBeVisible();
    await expect(page).toHaveURL('https://answear.ua/ru/mii-akkaunt/uviity');
    });
    
    test ('Test abilty to Log In (it will fail as planed)', async ({page}) => {
    const loginPage = new PlaywrightDevPage(page);
    await page.waitForTimeout(4000);
    await loginPage.clickOnTheButtonAcceptCookies();
    await loginPage.waitForAccountElement();
    await loginPage.clickOnAccountIcon();
    await loginPage.enterUsername('milenacapbatut@gmail.com');
    await loginPage.enterPassword('qwe123');
    await loginPage.clickOnTheButtonSubmit();
    await expect(page).toHaveURL('https://answear.ua/ru/mii-akkaunt');
    const locator = page.locator("//h4[text()='Персональные данные']");
    await expect(locator).toBeVisible();
    });
    

  });
