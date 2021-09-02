// playwright-dev-page.js

exports.PlaywrightDevPage = class PlaywrightDevPage {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('https://answear.ua/ru/c/vona');
    }
  
    async clickOnSearch() {
      await this.page.click(('//input[@id="productsSearch"]'));
      
    }
  
    async enterText() {
      await this.page.fill('//input[@id="productsSearch"]', 'Nike');
    
    }
    async pressSubmitButton() {
    await this.page.press('//input[@id="productsSearch"]','Enter');
    }
    async waitForAnElement() {
    await this.page.waitForSelector('//img[@alt="Nike Sportswear - Брюки"]');
    }

    async waitForAnElement2() {
      await this.page.waitForSelector('//a[@aria-label="Аккаунт"]');
    }

    async clickAccountIcon() {
      await this.page.click(('//a[@aria-label="Аккаунт"]'));
      
    }

    async waitForUsernameField() {
      await this.page.waitForSelector('//input[@id="_username"]');
    }
    async clickOnTheButtonSubmit() {
      await this.page.click('(//button[@type="submit"])[1]');
    
    }
    async enterUsername() {
      await this.page.fill('//input[@id="_username"]', 'MilenaCapbatut@gmail.com');
    } 
    async enterPassword() {
      await this.page.fill('//input[@id="_password"]', 'qwe123');
    } 
}