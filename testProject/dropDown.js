describe('This package defines cases for selecting values from dropdown',function(){
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    function calc(a,b,operation){

        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('option')).each(function(items){

            items.getAttribute('value').then(function(selOption){
                //	console.log(selOption);
                if(selOption==operation){
                    items.click();
                }
            })
        })

        element(by.id('gobutton')).click();
    }
    it('Entering values in the field',function(){

        var URL="https://juliemr.github.io/protractor-demo/";
        browser.get(URL);
        browser.driver.manage().window().maximize();
        calc(4,3,'MULTIPLICATION');
        calc(4,9,'DIVISION');
        calc(8,3,'MODULO');
        calc(4,5,'SUBTRACTION');
        calc(10,3,'SUBTRACTION');


        element.all(by.repeater('result in memory')).each(function(item){

            item.element(by.css('td:nth-child(3)')).getText().then(function(text){

                console.log(text);
            })
        })


    })
})