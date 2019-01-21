describe('this suite contains case to add product in cart based on name',function () {
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    function selectProduct(productName){

        element.all(by.tagName("app-card")).each(function(items){
            items.element(by.css("h4[class='card-title']")).getText().then(function (text) {

                   if(text==productName){

                      items.element(by.css("button[class='btn btn-info']")).click();
                   }

               })

        })
    }
    it('Select product and add in cart',function(){
    browser.get('https://qaclickacademy.github.io/protocommerce/');

        element(by.linkText('Shop')).click();
        selectProduct('Samsung Note 8');
        selectProduct('iphone X');
        selectProduct('Nokia Edge');
        element(by.partialLinkText('Checkout')).getText().then(function (value) {
            console.log(value);
        })


    })
})