var BrowserUtils = function(world){
    var _this = this;

    _this._data = {};
    _this.data = {};

    _this.clearLocalStorage = function (){
        return browser.executeScript('window.localStorage.clear();');
    };

    _this.navigateTo = function(page){
        // _this.data = world.pageFactory.getPage(page);
        // return browser.get(_this.data.url);
        var page = world.pageFactory.getPage(page);
        return page.visit();
    };

    _this.changePage = function(page){
        world.pageFactory.getPage(page);
        return true;
    };
};

module.exports = BrowserUtils;
