import { browser, by, element, $, ExpectedConditions as EC } from 'protractor';
describe('the user does search on angular.io', () => {
  it('搜尋 ngZone', async () => {
    await browser.get('https://angular.io/');
    await $('aio-search-box > input[type="search"]').sendKeys('ngzone');

    const search = $('.search-results');
    const ngZone = $('#ngzone');
    await browser.wait(EC.textToBePresentInElement(search, 'NgZone'), 5000);
    expect(await search.getText()).toContain('NgZone');
    await element(by.linkText('NgZone')).click();
    await browser.wait(EC.textToBePresentInElement(ngZone, 'NgZone'), 5000);
    expect(await ngZone.isDisplayed()).toBe(true);
  });
});
