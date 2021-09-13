// selectors.js
const searchfield = '//input[@id="productsSearch"]'; 
const nikeSportswereProduct = '//img[@alt="Nike Sportswear - Брюки"]';
const accountIconElement = '//a[@aria-label="Аккаунт"]';
const usernameField = '//input[@id="_username"]';
const passwordField = '//input[@id="_password"]';
const buttonSubbitForAccount = '(//button[@type="submit"])[1]';
const buttonAcceptCookies = "//div[text()='согласиться со всем']";


exports.PlaywrightDevPage = class PlaywrightDevPage {
  /**
   * @param {import('playwright').Page} page
   */
   
  constructor(page) {
    this.page = page;
  }
   async goto(link) {
    await this.page.goto(link);
  }
   async clickOnSearchField() {
    await this.page.click(searchfield);
   
  }
   async enterText(text) {
    await this.page.fill(searchfield, text);
  }
  
  async enterSearchRequest(text) {
    await this.page.click(searchfield);
    await this.enterText(text);
  }
  
  async pressSubmitButton(key) {
  await this.page.press(searchfield, key);
  }
  async waitForAnElementSportswear() {
  await this.page.waitForSelector(nikeSportswereProduct);
  }

  async waitForAccountElement() {
    await this.page.waitForSelector(accountIconElement);
  }

  async clickOnAccountIcon() {
    await this.page.click(accountIconElement);
   
  }

  async waitForUsernameField() {
    await this.page.waitForSelector(usernameField);
  }
  async clickOnTheButtonSubmit() {
    await this.page.click(buttonSubbitForAccount);
 
  }
  async enterUsername(username) {
    await this.page.fill(usernameField, username);
  }
  async enterPassword (password) {
    await this.page.fill(passwordField, password) ;
  }
  async clickOnTheButtonAcceptCookies() {
   await this.page.click(buttonAcceptCookies);
  }
  
  async assertCorrectSearchResultsPageIsOpened(searchRequest) {
   await expect(page).toHaveURL(`https://answear.ua/ru/k/vona?q=${searchRequest}`, { timeout: 5000 });
   await this.waitForAnElementSportswear();
   await expect(page.locator('//span[text()="Страница"]')).toBeVisible();
  }
}
