# challenge
Challenge con demo saucedemo, utilizando cypress y javascript. 


# Automated Testing with Cypress and JavaScript

This repository contains an automated web testing project that interacts with saucedemo and webservice from Mercadolibre using Cypress and JavaScript.

## Pre-requisites

To get started with this project, you'll need to have the following prerequisites installed on your machine:

1. Node JS: I recommend using version 16.14.2 or newer.
2. Json-formatter for Native Reporter option(depends on your OS: https://github.com/cucumber/json-formatter)

## Getting Started

Install project dependencies.

```
npm i
```

## Running Tests

You can run the automated tests by using the following command:

1. Run test

```
npm test
```

2. Native report

- Install [cucumber-formatter](https://github.com/cucumber/json-formatter)
- Run test
- Put in console: `node cucumber-html-report.js`
- Open the html-report.html

Results you should see
![Alt text]()

3. Report in Cypress Cloud
 3.1 Run test
 ```
 npm run cy:report 
 ```
 3.2 Go to the [Dashboard in cypress](https://cloud.cypress.io/projects/frqpqd/)

## Contact

If you have any questions or have feedback, please don't hesitate to reach out to me at dbquiroga.day@gmail.com.

---

Thank you for exploring my automated testing project! Happy testing! 🚀
