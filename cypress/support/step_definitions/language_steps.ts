import { When } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../pageobjects/HomePage";

When("I select language {string}", (languageType: string) => {
  HomePage.selectLanguage(languageType);
});
