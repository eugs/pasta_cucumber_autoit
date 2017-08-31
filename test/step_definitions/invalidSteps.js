var {defineSupportCode} = require('cucumber');

var pageFactory = require('../po/pageFactory.js');
var helper = require('../support/Helper.js');


defineSupportCode(function({When,Then}) {

	When(/^I upload invalid file '([^']*)'$/, function (file) {
       return this.pageFactory.currentPage.uploadUI(file);        
    });

    Then(/^I should see message '([^']*)'$/, function (message) {
       return this.pageFactory.currentPage.invalidSizeAlert.getText()
        .then((text)=>{
            return expect(text).to.equal(message);             	
        });
        
    });
    
});
