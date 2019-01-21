describe('this suite has cases for handling java alerts',function(){
    it('generates java alert and handles it ', function () {

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');

        element(by.css("button[ng-click='manager()']")).click();
        element(by.css("button[ng-click='addCust()']")).click();

        element(by.model('fName')).sendKeys('testFirstName');
        element(by.model('lName')).sendKeys('testLastName');
        element(by.model('postCd')).sendKeys('123456');
        element(by.css("button[type='submit']")).click();

        browser.switchTo().alert().accept();

    });
})