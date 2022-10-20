# Boilerplate-Playwright-PlaywrightReport-AllureReport
Template repository for project based on Cypress framefork with configurated GitHub actions and Allure report. Can be used for auto testing on Chrome/Firefox/Efge/Electron browsers with Allure Report. Includes Code Generator

##  Notice! To run tests on different browsers, browsers should be installed loccaly 

##  Envoirment:
   1. [Node.js](https://nodejs.org/uk/)
   2. [VSC](https://code.visualstudio.com/download)
   
## Steps to install project

## 1. Run command in VSC:

```
git clone https://github.com/ValeriiMandryka/Boilerplate-Cypress-AllureReport.git

```
## 2. Into root of Project run commands:
```
npm install

```
## 3. Run tests commands:

    3.1 run tests in headless mode
       
       npm run tests:Headless  
            
    npm run tests:Headed -  run tests in headed mode
    npm run open:Cypress  - opens cypress UI
    npm run generate:AllureReport - generates Allure report
    npm run open:AllureReport  - open Allure report
    npm run clean:AllureResults - clean Allure results
    npm run tests-on-Chrome:Headless - runs tests in Chrome in headless mode
    npm run tests-on-Firefox:Headless - runs tests in Firefox in headless mode
    npm run tests-on-Edge:Headless - runs tests in Edje in headless mode
    npm run tests-on-Electron:Headless -  runs tests in Electron in headless mode
    npm run tests-on-Chrome:Headed - runs tests in Chrome in heaed mode
    npm run tests-on-Firefox:Headed - runs tests in Firfox in heaed mode
    npm run tests-on-Edge:Headed  - runs tests in Edje in heaed mode
    npm run tests-on-Electron:Headed - runs tests in Electron in heaed mode
    npm run tests:Local - runs tests on website: "https://example.cypress.io/todo", just for example of command were you can set your own web site adress(in Packaje.json file) 
    npm run tests:Stage - runs tests on website: "https://google.com" , just for example of command were you can set your own web site adress(in Packaje.json file)

## 4. Allure report:
   4.1 To generate Allure report arun follow command after the test that you chose for run
   ```
   npm run generate:AllureReport

   ```
   4.2 To open Allure report, run command:
    
   ```
   npm run open:AllureReport

   ```
   

  
