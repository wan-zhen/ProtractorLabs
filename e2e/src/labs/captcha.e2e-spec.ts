import { browser, by, element, $, ExpectedConditions as EC } from 'protractor';
fdescribe('the user submit a questionnaire', () => {
  it('輸入驗證碼', async () => {
    await browser.get('/labs/captcha');

    await browser.wait(waitForCaptcha, 10000);
    function waitForCaptcha() {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          element(by.name('captchaCode'))
            .getAttribute('value')
            .then(val => {
              if (val.length === 4) {
                clearInterval(interval);
                resolve('ok');
              }
            });
        }, 500);
      });
    }
    await element(by.buttonText('送出')).click();
    expect(await element(by.tagName('form')).getText()).toContain('驗證碼正確');
  });
});
