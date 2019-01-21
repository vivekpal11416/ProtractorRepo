describe('this suite automates the banking page',function(){
    //browser.manage().timeouts().implicitlyWait(50000);
    function selUser(name){
        browser.actions().mouseMove(element(by.id('userSelect')).click()).perform();
        element.all(by.tagName('option')).each(function(items){
            items.getText().then(function(dropDownName){

                if(dropDownName==name){

                    console.log(dropDownName);
                    //browser.wait(ExpectedConditions.elementToBeClickable(), 30000);
                    items.click();
                    //browser.sleep(10000);

                }
            })
        })
    }

    it('click on customer login and perform actions as customer',function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        element(by.css("button[ng-click='customer()']")).click();
        browser.getCurrentUrl().then(function(title){
            console.log(title);

            selUser("Ron Weasly");
            element(by.css("button[type='submit']")).click();

        })
    })
})
