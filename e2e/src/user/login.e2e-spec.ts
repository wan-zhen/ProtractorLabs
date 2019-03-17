import { browser, by, element } from "protractor";

describe("the user try to login", () => {
  it("登入", async () => {
    await browser.get("/user/login");
    await element(by.id("userName")).sendKeys("John");
    await element(by.id("password")).sendKeys("123456");
    await element(by.buttonText("登入")).click();
    const url = await browser.getCurrentUrl();
    console.log(url);
    expect(url).toContain("events");
  });

  it("登入錯誤", async () => {
    await browser.get("/user/login");
    await element(by.id("userName")).sendKeys("none");
    await element(by.id("password")).sendKeys("aa");
    await element(by.buttonText("登入")).click();
    const errorMsg = await element(by.className("alert-danger")).getText();
    const hasDom = await element(by.className("alert-danger")).isDisplayed();
    expect(errorMsg).toBe("錯誤的帳號密碼");
    expect(hasDom).toBeTruthy();
  });

  it("按取消回到 event", async () => {
    await browser.get("/user/login");
    await element(by.buttonText("取消")).click();
    expect(await browser.getCurrentUrl()).toContain("events");
  });
});
