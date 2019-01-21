describe('this suite contains cases for shopping site',function () {

    it('contains cases for shopping page',function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.linkText('Shop')).click();

    })

})