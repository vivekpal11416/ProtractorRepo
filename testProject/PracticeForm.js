function formObjects() {

    this.fistName = element(by.name('firstname'));
    this.lastName = element(by.name('lastname'));
    this.sex=element(by.id('sex-1'));

    this.getYearsOfExp=function(yearsExp){

        element.all(by.name('exp')).each(function (exp) {
            exp.getAttribute('value').then(function (value) {

                if(value==yearsExp){

                    exp.click();
                }


            })
        })
    }

    this.dateValue=element(by.id('datepicker'));
    this.profession=element(by.id('profession-1'));

    this.getURL=function(){
        browser.get('https://www.toolsqa.com/automation-practice-form/');
    }

}

module.exports= new formObjects();