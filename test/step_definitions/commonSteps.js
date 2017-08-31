var {defineSupportCode} = require('cucumber');
var pageFactory = require('../po/pageFactory.js');

defineSupportCode(function({Given,When,Then}) {

	When(/^I authorize$/, function() {
		// return this.pageFactory.currentPage.authorize();
		return this.pageFactory.currentPage.login();
	});

	Given(/^I am on '([^']*)' page$/, function (page) {
        return this.pageFactory.getPage(page).visit();
	});

	Then(/^title should be '([^']*)'$/, function (pageTitle) {
	  return this.pageFactory.currentPage.getPageTitle()
	  	.then((title)=>{
	  		console.log('current title:', title);
	  		return expect(title).to.equal(pageTitle);
	  	});
	});

});
