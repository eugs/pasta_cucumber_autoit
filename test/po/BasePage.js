'use strict';
const exec = require('child_process').execFile;
class BasePage {

    constructor() {
        this.header = require('./ui/Header.js');;
        this.url = '';
    }

    getHeader() {
        return this.header;
    }

    visit() {
        return browser.get('https://pasta.lab.epam.com/' + this.url);
    }

    getPageTitle() {
        return browser.getTitle();
    }

    getUrl() {
        return browser.getCurrentUrl();
    }

    // login() {
    //   // return new Promise(function (resolve, reject)  {
    //     // browser.sleep(8000);
    //     console.log("run login script");
    //     exec('./test/support/exe/login.exe', function (err, data) {
    //     // exec('./login.exe', function (err, data) {
    //         // console.log(err);
    //         console.log(data.toString());
    //     });
    //     console.log("script finished");
    //     return browser.sleep(5000);
    //     // return resolve("login finished");

    //   // });
    // }

    login() {
  browser.getTitle()
    .then((txt) => console.log('title', txt));

  var user = process.env.MY_USER;
  var pass = process.env.MY_PASS;

  var webdriver = require('selenium-webdriver');
//MY
  var ad = new webdriver.Builder().usingServer(AUTOIT_IP).withCapabilities({'browserName': 'AutoIt' }).build();

  ad.switchTo().window("Authentication Required");
  // ad.actions().sendKeys("{TAB}").perform();
  browser.sleep(500);
  ad.actions().sendKeys(user).perform();
  browser.sleep(500);
  ad.actions().sendKeys("{TAB}").perform();
  browser.sleep(500);
  ad.actions().sendKeys(pass).perform();
  browser.sleep(500);
  ad.actions().sendKeys("{ENTER}").perform();
  browser.sleep(5000);

}

	//  login() {
	// 	exec('./login.exe', [process.env.MY_USER, process.env.MY_PASS], function(err, data) {
	// 		console.log(process.env.MY_USER.toString());
	// 		console.log(data.toString());
	// 	});
	// 	return browser.sleep(10000);
	// }

}
module.exports = BasePage;
