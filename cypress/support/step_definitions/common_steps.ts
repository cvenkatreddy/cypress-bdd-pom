import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../pageobjects/HomePage";
import { VerifyPageUrl } from "../browser";

Given("I Launch home page", () => {
  HomePage.launchPage();
});

When(
  "I should see the application has navigated to page {string}",
  (pageUrl: string) => {
    VerifyPageUrl(pageUrl);
  }
);
