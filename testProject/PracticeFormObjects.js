describe('this Suite consistes of cases for filling the Test form',function () {
    browser.waitForAngularEnabled(false);
    var obj=  require("./PracticeForm.js");
    var fs = require('fs');

    // abstract writing screen shot to a file
    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    beforeEach(function () {
        obj.getURL();

    });
    it('Page Locators',function () {

        obj.getURL();
        obj.fistName.sendKeys('testFirst');
        obj.lastName.sendKeys('testLast');
        obj.sex.click();
        obj.getYearsOfExp('6');
        obj.dateValue.sendKeys('10/10/20');
        obj.profession.click();
        console.log('new line added');
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'exception.png');
        });




    })
})