import { TableDefinition } from "cypress-cucumber-preprocessor";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../pageobjects/HomePage";
import { VerifyPageUrl } from "../browser";

Given("I Launch application on mobile", () => {
  cy.viewport("iphone-6");
});

When("I click on burger button", () => {
  HomePage.clickBurgerBtn();
});

Then("I verify the main menu types", (dataTable: TableDefinition) => {
  const labels = dataTable.raw();
  HomePage.verifyMainMenuItems(labels);
});

When("I select sub menu {string}", (submenuItem: string) => {
  HomePage.selectSubMenu(submenuItem);
});
