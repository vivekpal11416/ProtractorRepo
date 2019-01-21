describe('this suite contains cases to handle multiple windows',function () {
    browser.waitForAngularEnabled(false);
    it('case to launch another window ', function () {

        browser.get('http://posse.com/');
        element(by.css("a[class='watchVideoButton']")).click().then(function(){
            browser.getAllWindowHandles().then(function (handles) {

                browser.switchTo().window(handles[1]).then(function(){

                    browser.getTitle().then(function(postTitle){

                        console.log(postTitle + '--title after clicking')
                    })
                })
                browser.switchTo().window(handles[0]).then(function () {
                    browser.getTitle().then(function(preTitle){

                        console.log(preTitle+'--title before clicking')
                    })
                })
            });

        });

    });
})