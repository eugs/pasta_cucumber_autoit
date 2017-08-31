var {defineSupportCode} = require('cucumber');

var Helper = require('./helpers/helper'),
    BrowserUtils = require('./helpers/browserUtils'),
    fs = require('fs'),
    PageFactory = require('../po/pageFactory');

function World() {
    this.fs = fs;
    this.helper = new Helper(this);
    this.browserUtils = new BrowserUtils(this);
    this.pageFactory = new PageFactory(this);
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(World);
})
