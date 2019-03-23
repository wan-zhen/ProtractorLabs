import { browser, by, element, $, ExpectedConditions as EC } from 'protractor';
describe('leave add new event page', () => {
  it('按取消', async () => {
    await browser.get('/events/new');
    await element(by.buttonText('取消')).click();
    await browser
      .switchTo()
      .alert()
      .accept();
    expect(await $('h1').getText()).toContain('活動列表');
  });
});
