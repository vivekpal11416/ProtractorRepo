describe('this suite contains the cases of shopping page',function () {

    it('entering fields data into form',function () {
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.name('name')).sendKeys('testName');
        element(by.name('email')).sendKeys('testEmail');
        element(by.id('exampleInputPassword1')).sendKeys('password');
        element(by.id('exampleCheck1')).click();
        element.all(by.tagName('option')).each(function (items) {

            items.getText().then(function (text) {
                if(text=='Female'){
                    items.click();

                }
            })
        })
        element(by.name('bday')).sendKeys('2012-01-01');
        browser.sleep(5000)
        element(by.buttonText('Submit')).click();
        element(by.css("div[class*='success']")).getText().then(function (text) {
            console.log(text);
            browser.sleep(5000)
        })

    })
})