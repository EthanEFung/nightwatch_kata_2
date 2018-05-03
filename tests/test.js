module.exports = {
  "Demo e2e test": function(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'todo to do')
      .waitForElementVisible('button', 1000)
      .click('button')
      .pause(1000)
      .assert.containsText('ul', 'todo to do')
      .closeWindow()
      .end();
  }
}