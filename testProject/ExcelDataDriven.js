"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceljs_1 = require("exceljs");
var testing_1 = require("selenium-webdriver/testing");
var protractor_1 = require("protractor");
testing_1.describe('Protractor Typescript Demo', function () {
    //browser.waitForAngularEnabled(false); // for non-angular websites
    testing_1.it('Excel File Operations', function () {
        // set implicit time to 30 seconds
        //   browser.manage().timeouts().implicitlyWait(30000);
        // create object for workbook
        var wb = new exceljs_1.Workbook();
        // read xlsx file type
        wb.xlsx.readFile("./test.xlsx").then(function () {
            //sheet object
            var sheet = wb.getWorksheet("Sheet1");
            //row objct
            var rowObject = sheet.getRow(3);
            // cell object
            var cellObject = rowObject.getCell(2);
            //print
            console.log(cellObject.value);
            //use the cell value as url for navigation
            protractor_1.browser.get(cellObject.toString());
        });
    });
});
