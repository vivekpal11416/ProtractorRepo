exports.config = {
    capabilities: {
        browserName: 'chrome'
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['dropDown.js','calculator.js']
    specs: ['PracticeFormObjects.js'],

    onPrepare:function () {
        browser.manage().window().maximize();
    }
};
