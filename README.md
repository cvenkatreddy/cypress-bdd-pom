# Automation Framework with Cypress

A sample framework created using cypress, bdd, typescript and docker, reports are generated using various report styles like mochawesome and allure-report.

## Pre-requisite Tools

1. Node version 12 or above
2. Visual Studio Code

## Quickstart

You know setting up framework is very quick!

1. npm install

## set host/ baseurl

1. go to cypress.json file
2. set baseurl

## Dashboard execution

1. Go to project root,
2. `npx cypress open` or `npm run cy:open`
3. click specific feature or run all features

## cmmd line Execution

1. `npm run e2e_mochawesome`  # for a full run with mochawesome reports
2. `npm run e2e_allure`       # for a full run with allure-reports
3. `npm run cy:run:record`    # for a full run and to upload testresults to cypress dashboard

and refer to more other npm scripts added in package.json

## Reports

1. Mochawesome reports:
   After execution of command `npm run e2e_mochawesome`, reports will be generated in `mochawesome-report` folder and open `output.html` for html reports

2. Allure reports:
   After execution of command `npm run e2e_allure`, allure reports will be shown via webserver

## Docker Execution

1. Download and install Docker

   - For Mac: https://www.docker.com/products/docker-desktop

   - For Windows: https://docs.docker.com/desktop/windows/

2. Go to project root and run command `docker build -t cypress .`

## Cypress open from docker-compose (this is not fully done)
- This is to setup cypress env(cypress folder under e2e directory) by using `docker-compose.yml` and `cy-open.yml` files

```
cd e2e
docker-compose -f docker-compose.yml -f cy-open.yml up --exit-code-from cypress
```

