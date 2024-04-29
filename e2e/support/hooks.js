const { Before, After } = require('@cucumber/cucumber');

Before(function () {
  // Code to run before each scenario
});

After(async function () {
  // Code to run after each scenario
  if (this.driver) {
    await this.driver.quit();
  }
});
