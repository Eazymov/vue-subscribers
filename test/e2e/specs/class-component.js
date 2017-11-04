
module.exports = {
  ['class component'] (browser) {
    browser
      .url('localhost:8000/test/e2e/specs/class-component.html')
      .waitForElementVisible('body', 500)
      .pause(300)
      .click('#button')
      .pause(100)
      .assert.containsText('#button', 'true')
      .click('#button')
      .pause(100)
      .assert.containsText('#button', 'false')
      .end();
  },
};