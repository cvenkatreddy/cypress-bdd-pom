import { SelectDropdown } from "../support/browser";

const searchInput = "#search";
const searchResult = ":nth-child(1) > .sc-faUpoM > .sc-nVkyK";
const gameTitleLbl = "figcaption.sc-hiwPVj > h6:contains('Book of Dead')";
const playBtn = ":nth-child(1) > .sc-faUpoM > .sc-nVkyK > .sc-dkPtRN";
const langDropdownBtn = "div.active-item > div";
const langDropdownValues =
  "div[width='auto'] > nav > ul > li[cursor='pointer'] > a > span > div";
const burgerBtn = "i.sc-fotOHu.ccHBMV.burger";
const mainMenuItemLbls = "section.sc-jftFmt > nav > ul > li";
const casinoMenuLbl = ":nth-child(2) > div > .sc-bBHxTw";
const subMenuItemLbls = "li > ul[data-af=sub-nav] > li > a";

export const HomePage = {
  launchPage() {
    cy.visit("/");
  },
  searchGame(gameToSearch: string) {
    return cy.get(searchInput).type(gameToSearch);
  },
  verifyGameVisible() {
    cy.get(searchResult).get(gameTitleLbl).should("be.visible");
  },
  clickPlayButton() {
    cy.get(playBtn).click({ force: true });
  },
  selectLanguage(langToSelect: string) {
    SelectDropdown(langDropdownBtn, langDropdownValues, langToSelect);
  },
  clickBurgerBtn() {
    return cy.get(burgerBtn).click({ force: true });
  },
  verifyMainMenuItems(labels: string[][]) {
    cy.get(mainMenuItemLbls).each((item, index) => {
      cy.wrap(item).should("have.text", labels[index].toString());
    });
  },
  selectSubMenu(subMenuToSelect: string) {
    this.clickBurgerBtn();
    SelectDropdown(casinoMenuLbl, subMenuItemLbls, subMenuToSelect);
  },
};
