import { When, Then } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../pageobjects/HomePage";

When("I Search for a game {string}", (gameToSearch: string) => {
  HomePage.searchGame(gameToSearch);
});

Then("I should see searched game is verifyGameVisible", () => {
  HomePage.verifyGameVisible();
});

When("I select play a game", () => {
  HomePage.clickPlayButton();
});
