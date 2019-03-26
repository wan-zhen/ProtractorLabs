# Angular 自動化測試實戰：使用 Protractor 實現 E2E 測試

本專案是【Angular 自動化測試實戰：使用 Protractor 實現 E2E 測試】課程附帶的練習範例專案，學員可以透過此專案進行 E2E 測試相關實作。

## 必要條件

請參考 [Angular 與 Protractor 開發環境說明](https://gist.github.com/doggy8088/3edd8190f4bc486b765a3c4e1fe46c8a) 進行設定。

## 初始化練習環境

1. 執行 Web API 伺服器

   請到 [這裡](https://github.com/duotify/ProtractorLabs/releases/tag/v1.0) 下載本課程所需的後端 Web API 程式，並依據該頁面說明進行下載並執行。

2. 使用 Git 下載練習專案並透過 `npm install` 安裝套件

   ```sh
   git clone https://github.com/duotify/ProtractorLabs.git
   cd ProtractorLabs
   npm install
   ```

3. 使用 VSCode 開啟專案

   ```sh
   code .
   ```

4. 啟動 Angular 開發伺服器

   請在專案根目錄下執行，這個命令會同時啟動前端 Angular 與後端 API 開發伺服器。

   ```sh
   npm start
   ```

5. 測試執行 E2E 測試 (Protractor)

   ```sh
   npm run e2e
   ```

## Note

1. Jasmine 有 2.X 3.X 版
angular 、 protractor 使用 2.X

2. 讓你的 protractor.conf.js 也可以享受 TypeScript 強型別的優勢，就是啟用 // @ts-check 型別檢查，然後就可以標示型別，接著就有完整的 IntelliSense

    https://stackoverflow.com/questions/55200176/how-to-define-types-in-protractor-conf-js-with-ts-check-enabled/55204126?fbclid=IwAR1eJiedjxVbcjJxT3W37TidgccqB9R7_8vaazcNfLDZehAGR532-RsQ4N0#55204126

3. Selenium 透過 API (較低階的語言) 使用 webDriver 來控制瀏覽器

   Protractor 封裝 Selenium API 換個更好寫的高階語言 (寫的就是 node.js)，基於 Selenium 的框架

   而 Protractor test 可用各種不同的測試框架 (Jasmine 、 Mocha...) 寫

4. 遠端 Selenium server 遠端的 IP ，port 預設 4444

   SeleniumAddress: 'http://XXX.XXX.XXX.XXX:4444/wd/hub

   本地 Address: 'http://localhost:4444/wd/hub

5. Protractor 可以控制滑鼠做拖曳事件，從一個 elementfinder 拖到下一個 elementfinder

6. Page Object 一個頁面就是一個 class ，你去 new 他就會得到這個測試 ，多封裝一層，增加可讀性

7. lable for input 的 id ，是拿來點到 lable 可以 focus 到 input 

8. 每個 method 只要加上 async 就都會回傳 promise ，你要用他的時候就 await

9. katalon recorder 錄製測試腳本的工具

10. --user-data-dir=G:/Chrome 不用無痕模式 可以記錄使用者狀態在 G:/Chrome

11. 刪除 navigator.webdriver 屬性，Fiddler 的 onBeforeResponse() 內容：
```sh
oSession.utilReplaceInResponse('<head>', '<head> <script>delete navigator[\'__proto__\'].webdriver;<\/script>');
```
## VS Code 操作技巧

1. Ctrl + e 搜尋檔案

2. Visual Studio IntelliCode - Preview 套件
智慧篩選目前專案最常用的 IntelliSense

    https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode&fbclid=IwAR0T8uJzlFOCi7fusV7vZaYaDSQTcxTm_8YL0eG53WM0ZfqhK9Tw2FHdXa0

3. .vscode/protractor.code-snippets 裡面代碼可寫在這個專案的 snippets

3. vs code 設定偵錯的設定
```sh
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug E2E",
      "program": "${workspaceRoot}/node_modules/protractor/bin/protractor",
      "args": ["${workspaceRoot}/e2e/protractor.conf.js"]
    }
  ]
}
```
## 相關資源連結

1. 注入 javascript 的 API 說明

    https://www.protractortest.org/?fbclid=IwAR0fV3VU8paq-YqwUKv1OT1hW6ETJy6_ImfjcTdKIb5gOYwW-nLZxUyEOyg#/api?view=webdriver.WebDriver.prototype.executeScript

2. 手機設定

    https://www.protractortest.org/?fbclid=IwAR2Rky6ptA-FemstnuM5FUortbDVBkZ4dvfhfyRP8qwfTAzP_Tdkk_NatrY#/mobile-setup

    
3.  模擬動作 API

    https://www.protractortest.org/?fbclid=IwAR2obCKU6ef0p0pi9bXj0qUbsUqgvtraaxjTGry1Efu5Nb-mjSF8R8lddQQ#/api?view=webdriver.WebDriver.prototype.actions

4. 透過 Regex Pattern 搭配 ExpectedCondition 的方法

    https://www.facebook.com/groups/2229968617266730/?multi_permalinks=2252695591660699%2C2252677531662505%2C2252674408329484%2C2252693898327535%2C2252693641660894&notif_id=1553312809232987&notif_t=group_activity

5. 複製 CSS 選取器的 Chrome 擴充套件 

    https://chrome.google.com/webstore/detail/webdriver-scripting-assis/defeagjagbpfggackgppbadbafdfbjfo?fbclid=IwAR2qPsywlEUqStqkGNxV5kJfbIKQT4fMyuHPyESoF2WE4UdmLSVsWzMeIFw

6. 如何將 Protractor 設定檔 (protractor.conf.js) 加入 TypeScript 型別檢查

    https://bit.ly/ProtractorConfigTypeScript?fbclid=IwAR3X8IQ0ush8VPsBvXvX5LXkz9GbxBAEJ40zP7xXZHeywEly0JgMUia8kkk

7. 一次搞懂單元測試、整合測試、端對端測試之間的差異

    https://blog.miniasp.com/post/2019/02/18/Unit-testing-Integration-testing-e2e-testing?fbclid=IwAR1GuCqVgODqMbVsJRf8hXiNIJYAWBMrwfgQf614GHQ3t-zT4lchJ-8jkO8

//TODO 用用看無頭模式
