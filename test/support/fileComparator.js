'use strict';

var fs = require('fs');

  var compareFiles = function (path1, path2) {
    var data1 = fileToString(path1);
      //console.log("data1 size: ", data1.length);
    var data2 = fileToString(path2);
      //console.log("data2 size: ", data2.length);
      // console.log("COMPARISON: ", data1 === data2);
       if (data1 === data2)
        return true;
       else {
         throw ("different files:" + data1.length + " vs " + data2.length);
       }
  }

  function fileToString(file) {
    var path = require('path');

    var pth = path.resolve(__dirname, file);
    var contents = fs.readFileSync(pth).toString();
    return contents;
  }

module.exports = compareFiles;
