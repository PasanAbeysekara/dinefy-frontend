const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    // Any global setup for your scenarios
  }
}

setWorldConstructor(CustomWorld);
