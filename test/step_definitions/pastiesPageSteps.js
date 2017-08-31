var {defineSupportCode} = require('cucumber');

var pageFactory = require('../po/pageFactory.js');
var header = require('../po/ui/Header.js');
var pastiesPage = require('../po/pastiesPage.js');


defineSupportCode(function({When,Then}) {

	When(/^I click on button pasties$/, function () {
        return this.pageFactory.currentPage.header.clickPasties()
        .then(()=>{
            return browser.sleep(1000);
        }).then(()=> this.pageFactory.getPage('pasties'));
    });

	Then(/^I should see a collection of pasties$/, function () {
        return this.pageFactory.currentPage.getPastiesAmount().then((number)=>{
        	expect(number).to.be.above(0);
        });
    });

    When(/^I choose ID of pastie$/, function () {
        return this.pageFactory.currentPage.pastiesID.first().getText().then((id)=>{
            return this.pageFactory.currentPage.choosePastie(id)
                .then(()=>{
                    return browser.sleep(1000);
                });
        });
    });

	Then(/^page with particular pastie should be displayed$/, function () {
        return this.pageFactory.getPage('pastie');
    });
});
