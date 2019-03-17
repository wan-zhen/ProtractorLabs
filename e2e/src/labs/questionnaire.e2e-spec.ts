import { browser, by, element } from "protractor";

describe("the user submit a questionnaire", () => {
  it("按下送出", async () => {
    await browser.get("/labs/questionnaire");
    await element(by.name("username")).sendKeys("John");
    await element(by.name("codeLanguage")).sendKeys("C#");
    await element(by.buttonText("送出")).click();
    const successTest = await element(by.css("div > form")).getText();
    expect(successTest).toContain("送出成功");
  });

  it('倒數有沒有動', async () => {
    await browser.get("/labs/questionnaire");
    const beforeTime= await element(by.css('div > h1')).getText();
    await browser.sleep(3000);
    const afterTime= await element(by.css('div > h1')).getText();
    expect(beforeTime).not.toBe(afterTime);
  });
});
