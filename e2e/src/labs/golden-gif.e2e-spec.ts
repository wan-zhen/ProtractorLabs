import { browser, element, by } from 'protractor';
import { compareScreenshot, addMask, go, click, see, type } from 'blue-harvest';
describe('gif page present', () => {
  it('遮住 gif', async () => {
    await browser.get('/labs/gif');
    await browser.driver
      .manage()
      .window()
      .setSize(1366, 1024);
    const golden = `e2e/goldens/giflab.png`;
    const diffDir = 'e2e/goldens/';
    const gif_img = element(by.id('gif-img'));
    await browser.waitForAngular();
    await addMask(gif_img, 'gray');
    const actual = await browser.takeScreenshot();
    const result = await compareScreenshot(actual, golden, diffDir);
    expect(result).toBeTruthy();
  });
});
