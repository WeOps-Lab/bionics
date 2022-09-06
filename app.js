const art = require('ascii-art');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    const rendered = await art.font('BIONICS', 'doom').completed();
    console.log(rendered);
  }

}

module.exports = AppBootHook;
