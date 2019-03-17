import { browser, by, element, $$ } from 'protractor';

fdescribe('add a new event', () => {
  it('建立活動', async () => {
    await browser.get('/events/new');
    await element(by.id('name')).sendKeys('Protractor 實戰');
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
    // await browser.sleep(2000);
  });
});
