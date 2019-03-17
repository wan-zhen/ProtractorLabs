import { browser, by, element, $$ } from "protractor";
fdescribe("search a event", () => {
  it("搜尋", async () => {
    await browser.get("/events");
    await element(by.name("searchTerm")).sendKeys("angular");
    await element(by.buttonText("搜尋")).click();
    const title = await element(by.className("modal-title")).getText();
    expect(title).toBe("符合的議程");
    // $$('.list-group-item') = element.all(by.className("list-group-item"))
    const listItem = $$(".list-group-item");
    const listCount = await listItem.count();
    expect(listCount).toBe(3);
    // await listItem.get(1).click();
    await element(by.linkText("Angular 實戰開發")).click();
    const url = await browser.getCurrentUrl();
    expect(url).toContain("events/1");
    const eventTitle = await element(by.tagName("h2")).getText();
    expect(eventTitle).toBe("ANGULAR 7 開發實戰：新手入門篇");
  });

  it("搜尋為空", async () => {
    await browser.get("/events");
    await element(by.buttonText("搜尋")).click();
    const listItem = element.all(by.className("list-group-item"));
    const listCount = await listItem.count();
    expect(listCount).toBe(0);
  });
});
