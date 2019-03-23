import { browser, by, element, $, ExpectedConditions as EC } from 'protractor';
fdescribe('add a new user', () => {
  it('新增會員', async () => {
    await browser.get('/user/new');
    await $('#username').sendKeys('mike');
    await $('#password').sendKeys('123');
    await $('#firstName').sendKeys('bob');
    await $('#lastName').sendKeys('joe');
    await $('#membershipterm').click();
    await browser.waitForAngularEnabled(false);
    const handles = await browser.getAllWindowHandles();
    await browser.switchTo().window(handles[1]);
    await browser.executeScript(() => {
      return window.scrollTo(0, document.body.scrollHeight);
    });
    await browser.wait(EC.elementToBeClickable($('#accept')), 5000);
    await $('#accept').click();
    await browser.switchTo().window(handles[0]);
    await browser.waitForAngularEnabled(true);
    await $('#add').click();
    expect(await browser.getCurrentUrl()).toBe(browser.baseUrl + 'error');
  });
});
