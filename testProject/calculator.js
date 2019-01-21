describe('this script is to automate calcuator angular website',function(){
    function multiply(a,b){
        element(by.model('first')).sendKeys(a);
        element.all(by.options('value for (key, value) in operators')).get(3).click();
        element(by.model("second")).sendKeys(b);
        element(by.id('gobutton')).click();

    }
    it('Entering values in the field',function(){

        var URL="https://juliemr.github.io/protractor-demo/";
        browser.get(URL);
       // browser.driver.manage().window().maximize();
        //console.log(element(by.xpath("/html/body/div/div/h3")).getText());
        element(by.xpath("/html/body/div/div/h3")).getText().then(function(text){

            console.log(text);
            if(text=='Super Calculator'){
                multiply(2,3);
                multiply(4,3);
                multiply(2,9);
                multiply(7,3);
                multiply(2,8);

                element.all(by.repeater('result in memory')).each(function(item){

                    item.element(by.css('td:nth-child(3)')).getText().then(function(text){

                        console.log(text);
                    })
                })

            }

            else{

                console.log('This is not the right app');
            }
        })






    })
})