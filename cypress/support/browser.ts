export const SelectDropdown = (
  dropdownArrowSelector: string,
  dropdownValuesSelector: string,
  valueToSelect: string
) =>
  cy
    .get(dropdownArrowSelector)
    .click({ force: true })
    .get(dropdownValuesSelector)
    .contains(valueToSelect)
    .then((div) => {
      div[0].click(); // this is jquery click() not cypress click()
    });

export const VerifyPageUrl = (pageUrl: string) => {
  return cy.url().should("contain", pageUrl);
};
