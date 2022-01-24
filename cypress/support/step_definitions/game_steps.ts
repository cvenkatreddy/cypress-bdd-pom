import { Then } from "cypress-cucumber-preprocessor/steps";
import { GamePage } from "../../pageobjects/GamePage";

Then("I should navigate to game {string}", (gamePageUrl: string) => {
  GamePage.verifyGameLaunch(gamePageUrl);
});
