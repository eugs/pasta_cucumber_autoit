'use strict';

var path = require('path');
var webdriver = require('selenium-webdriver');

//larisa
// var ad = new webdriver.Builder().usingServer('http://10.6.97.161:4723/wd/hub').withCapabilities({'browserName': 'AutoIt' }).build();

// misha
// var ad = new webdriver.Builder().usingServer('http://10.6.97.105:4723/wd/hub').withCapabilities({'browserName': 'AutoIt' }).build();


//setup manually
process.env.SELENIUM_REMOTE_URL = AUTOIT_IP;

// eugen
var ad = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'AutoIt' }).build();


var filePaths = {
	'pic': './filesToUpload/pic.jpg',
	'txt': './filesToUpload/text.txt',
	'video': './filesToUpload/video.mp4',
	'invalid-pic': './filesToUpload/5mb.jpg',
	'invalid-txt': './filesToUpload/more-than-500kb.txt',
	'javascript' : './filesToUpload/JS_code.txt'
};

var upload = function(fileType){
	ad.switchTo().window("Open");
	browser.sleep(100);
	ad.actions().sendKeys([path.resolve(__dirname, filePaths[fileType])]).perform();
	//browser.sleep(500);
	ad.actions().sendKeys("{ENTER}").perform();
	//return browser.sleep(1000);
};

module.exports = upload;
