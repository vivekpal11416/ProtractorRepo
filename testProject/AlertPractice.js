describe('practice alert test Suite',function () {
    browser.waitForAngularEnabled(false);
    it('click on button and generate alert',function () {

        browser.get('https://www.toolsqa.com/automation-practice-switch-windows/');

        element(by.id('timingAlert')).click();
        browser.wait(ExpectedConditions.alertIsPresent(), 50000);
        browser.switchTo().alert().getText().then(function (text) {
            console.log(text);
            browser.sleep(3000);
            browser.switchTo().alert().accept();
            browser.sleep(3000);
        })
    })
})