// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
  },
  SELENIUM_PROMISE_MANAGER:false,// 停用 controllFlow
  highlitDelay:2000,// 每個 it 停兩秒 要 run server 才有用
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000,
    print: function() {}
  },
  async onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    // 在不是 angular 環境的設定
    // await browser.waitForAngularEnabled(false)
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: false } }));
  }
};
