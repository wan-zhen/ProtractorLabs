import { browser, by, element, $$ } from 'protractor';
describe('add a new session', () => {
  it('建立議程', async () => {
    const sessionName = 'Protractor 表單練習';
    await browser.get('/events/1');
    await element(by.css('.col-md-2 a')).click();
    await element(by.id('sessionName')).sendKeys(sessionName);
    await element(by.id('presenter')).sendKeys('John');
    const timelist = element(by.name('duration'));
    await timelist.element(by.cssContainingText('option', '一小時')).click();
    expect(await timelist.getAttribute('value')).toBe('2');
    const session = element(
      by.css(`input[type=radio][name=period][value=上午場]`)
    );
    await session.click();
    expect(await session.getAttribute('checked')).toBeTruthy();
    const chk = element(by.css(`input[type=checkbox][name=level][value=初級]`));
    const chk2 = element(
      by.css(`input[type=checkbox][name=level][value=中級]`)
    );
    await chk.click();
    await chk2.click();
    expect(await chk.getAttribute('checked')).toBeTruthy();
    expect(await chk2.getAttribute('checked')).toBeTruthy();
    await element(by.id('abstract')).sendKeys('自動化 Protractor 表單');
    await element(by.buttonText('儲存')).click();
    const newSession = $$('div[well-title]').last();
    expect((await newSession.getText()) === sessionName);
  });
});
