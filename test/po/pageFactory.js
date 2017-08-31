var homePage = require('./homePage'),
    codePage = require('./codePage'),
    pastiePage = require('./pastiePage'),
    pastiesPage = require('./pastiesPage'),
    videoPage = require('./videoPage'),
    imagePage = require('./imagePage');

var PageFactory = function(world){

    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page) {
        var pages = {
            'home': homePage,
            'code' : codePage,
            'pastie' : pastiePage,
            'pasties' : pastiesPage,
            'video' : videoPage,
            'image' : imagePage,
        };
        if(!pages[page]) {
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage;
    };
};

module.exports = PageFactory;
