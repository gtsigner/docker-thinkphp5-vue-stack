const fs = require('fs');
var fileName = 'a.txt';
fs.watch(fileName, (function () {
    var count = 0;
    return function () {
        count++;
        console.log("文件" + fileName + " 内容刚刚改变。。第" + count + "次");
    };
})());
console.log("watching file...");