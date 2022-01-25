# https://github.com/cypress-io/cypress-docker-images/tree/master/included

# pull image
FROM cypress/included:9.3.1
# make directory inside container
RUN mkdir /e2e
WORKDIR /e2e
# copy cypress code from host to container
COPY . /e2e
# execute the tests
RUN npm install
RUN npm run e2e
# RUN npm run test:allure-report
