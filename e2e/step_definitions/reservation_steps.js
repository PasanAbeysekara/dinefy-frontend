const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
let driver;

Given('the customer is on the reservation page', async function () {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://dinefy.netlify.app/product/GHI012');
});

When('they input their details', async function () {
  await driver.findElement(By.id('reserveDate')).sendKeys('John Doe');
  await driver.findElement(By.id('reserveDate')).sendKeys('2024-04-30');
});

When('they select a table for {int}', async function (number) {
  await driver.findElement(By.id('tableSize')).sendKeys(number.toString());
});

When('they submit the reservation request', async function () {
  await driver.findElement(By.id('submitBtn')).click();
});

Then('they should receive a confirmation of the reservation', async function () {
  let element = await driver.findElement(By.id('confirmation'));
  let isVisible = await element.isDisplayed();
  assert.strictEqual(isVisible, true);
  await driver.quit();
});
