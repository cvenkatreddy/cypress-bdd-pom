# cypress-bdd-pom

# AUTOMATION FRAMEWORK WITH CYPRESS
A sample framework created using cypress, bdd, typescript, mochawesome and allure-report.

## Pre-requisite Tools
1. Node version 12 or above
2. Visual Studio Code

## Quickstart
You know setting up framework is very quick 🚀
1. npm install

## set host/ baseurl
1. go to cypress.json file
2. set baseurl

## Dashboard execution
1. Go to project root, 
2. npx cypress open
3. click specific feature or run all features

## cmmd line Execution
1. `npm run e2e_mochawesome` //for a full run with mochawesome reports
2. `npm run e2e_allure` //for a full run with allure-reports
3. `npm run cy:run:record` // for a full run and to upload testresults to cypress dashboard

## Reports
1. Mochawesome reports: 
After execution of command `npm run e2e_mochawesome`,  reports will be generated in `mochawesome-report` folder and open `output.html` for html reports
  
2. Allure reports: 
   After execution of command `npm run e2e_allure`, allure reports will be shown via webserver
