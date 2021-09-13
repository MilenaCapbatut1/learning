
const { helpers } = require('playwright');

exports.PlaywrightDevPage = class PlaywrightDevPage {
    /**
     * @param {import('playwright').Page} page
     */
     
    constructor(page) {
      this.page = page;
      }
//Enter Text in Search Filed
 async enterTextinSearchField(text) {
    await this.clickOnSearchField();
    await this.page.fill(searchfield, text);
    await this.pressSubmitButton();
  }

// Select a product
  async clickOnTheSelectSizeDropDown() {
    await this.page.waitForSelector(selectSizeDropDown);
    await this.page.click(selectSizeDropDown);
    await this.page.click(selectSizeNumber38);
  }

  //Accept cookies
  async clickOnTheButtonAcceptCookies(selector) {
    await this.page.click(selector);
   }

}