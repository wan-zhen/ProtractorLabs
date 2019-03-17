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

## VS Code 操作技巧

1. Ctrl + e 搜尋檔案

2. Visual Studio IntelliCode - Preview 套件
智慧篩選目前專案最常用的 IntelliSense

https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode&fbclid=IwAR0T8uJzlFOCi7fusV7vZaYaDSQTcxTm_8YL0eG53WM0ZfqhK9Tw2FHdXa0

3. .vscode/protractor.code-snippets 裡面代碼可寫在這個專案的 snippets
