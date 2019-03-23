// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {
  SpecReporter
} = require('jasmine-spec-reporter');
// const {
//   browser
// } = require('protractor');
/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  // 建立一組要測試的檔案範圍
  suites: {
    events: './src/events/**/*.e2e-spec.ts',
    golden: [
      './src/labs/golden.e2e-spec.ts',
      './src/labs/golden-gif.e2e-spec.ts'
    ]
  },
  capabilities: {
    browserName: 'chrome',
  },
  SELENIUM_PROMISE_MANAGER: false, // 停用 controllFlow
  highlitDelay: 2000, // 每個 it 停兩秒 要 run server 才有用
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000,
    print: function () {}
  },
  async onPrepare() {

    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    // 在不是 angular 環境的設定
    // await browser.waitForAngularEnabled(false)
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: false
      }
    }));
    await jasmine.getEnv().addReporter({
      specDone: async (result) => {
        // 當測試失敗
        if (result.failedExpectations.length > 0) {
          console.log('enter');
          // 截圖
          let png = await browser.takeScreenshot();
          var stream = require('fs').createWriteStream(
            "./failuretests/failureScreenshot.png");
          stream.write(new Buffer(png, 'base64'));
          stream.end();
        }
      }
    });
  }

};
