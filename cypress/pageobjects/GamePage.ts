import { VerifyPageUrl } from "../support/browser";

const gamePageHeader = "h1[scale='1']";

export const GamePage = {
  verifyGameLaunch(gamePageUrl: string) {
    VerifyPageUrl(gamePageUrl).then(() => {
      cy.get(gamePageHeader).should(
        "have.text",
        "Book of Dead Slot at Ninja Casino!"
      );
    });
  },
};
