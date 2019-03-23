import { browser, by, element, $$, ExpectedConditions as EC } from 'protractor';
describe('add a new event', () => {
  it('建立活動', async () => {
    await browser.get('/events/new');
    const newEventTitle = 'Protractor 實戰';
    await element(by.id('name')).sendKeys(newEventTitle);
    await element(by.className('mat-datepicker-toggle-default-icon')).click();
    await element(by.tagName('mat-datepicker-content')).isDisplayed();
    await element(by.className('mat-calendar-period-button')).click();
    const year = '1997';
    const month = 'DEC';
    const day = '31';
    let i;
    while (i !== year) {
      await element(by.className('mat-calendar-previous-button')).click();
      let findYear = await $$('.mat-calendar-body-cell')
        .filter(elem => elem.getText().then(text => text === year))
        .first();
      if ((await findYear.getText()) === year) {
        i = year;
        await findYear.click();
      }
    }
    await $$('.mat-calendar-body-cell')
      .filter(elem => elem.getText().then(text => text === month))
      .first()
      .click();
    await $$('.mat-calendar-body-cell')
      .filter(elem => elem.getText().then(text => text === day))
      .first()
      .click();
    expect(element(by.id('eventDate')).getAttribute('value')).toBe(
      '12/31/1997'
    );
    await element(by.id('eventTime')).sendKeys('早上');
    await element(by.id('eventPrice')).sendKeys('500');
    await element(by.id('address')).sendKeys('中正路100號');
    await element(by.id('city')).sendKeys('台北市');
    await element(by.id('country')).sendKeys('台灣');
    await element(by.id('onlineUrl')).sendKeys('http://example.com');
    const path = require('path');
    const imgPath = path.resolve('./e2e/src/assets/Protractor.png');
    const imageFile = element(by.name('imageFile'));
    await imageFile.sendKeys(imgPath);
    console.warn(await imageFile.getAttribute('value'));
    expect(await imageFile.getAttribute('value')).toBeTruthy();
    await element(by.buttonText('儲存')).click();
    const newEvent = $$('.well.hoverwell.thumbnail h2').last();
    expect((await newEvent.getText()) === newEventTitle);
  });
});
