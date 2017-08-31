var {
	defineSupportCode
} = require('cucumber');

var helper = require('../support/Helper.js');
var compare = require('../support/fileComparator.js');

defineSupportCode(function({Given,When,Then}) {

	When(/^I upload valid-size image with expiration date '([^']*)' and description '([^']*)'$/, function(exp, desc) {
		var main = this.pageFactory.getPage('home');
		main.setExpirationDate(exp);
    main.uploadUI('pic');
		main.setDescription(desc);
  	return helper.waitForAndClick(main.shareButton, helper.waitForVisible);

		// return browser.get('https://pasta.lab.epam.com/pasties/szz5drmu');
	});

	When(/^I click on '([^']*)' button $/, function() {


	});

//TODO
	Then(/^I should see pastie '([^']*)' page$/, function(pageName) {
		this.pageFactory.getPage(pageName);
		var checkingFunction;

		if(pageName === 'image') {
			checkingFunction = this.pageFactory.currentPage.getImageURL;
		}

		//TODO code + video

		// check if page return some value
		return expect(checkingFunction()).to.not.be.undefined;
	});

	Then(/^I should see the same quality image as was uploaded$/, function() {
		this.pageFactory.getPage('image');
		//download img for comparison
    return this.pageFactory.currentPage.saveIMG()
    	.then(function (msg) {
        console.log("image:", msg);
         return helper.pauseFor(2000)

      .then(() => {
        var comparisonResult = compare('./filesToUpload/pic_downloaded.jpg', './filesToUpload/pic.jpg');
				return expect(comparisonResult).to.be.true;
      })
     });
	});

	When(/^I click on image preview$/, function() {
		return this.pageFactory.currentPage.showPreview();
	});

	Then(/^I should see big image$/, function() {
	var imgPage = this.pageFactory.currentPage;
	 return imgPage.bigImageIsVisible()
	 	.then((text) => {
			return expect(text === imgPage.getWindowLocator()).to.be.true;
	 	});
	});

	When(/^I click on big image$/, function() {
		return this.pageFactory.currentPage.closePreview();
	});

});
