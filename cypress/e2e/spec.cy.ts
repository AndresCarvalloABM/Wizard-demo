describe('ABM Demo test', () => {
  it('should type the value with special characters into the input element', () => {
    cy.visit('/');
    const specialValue = '$k_{el}\\degree$';
    cy.log('value', specialValue); // it doesn't show as the value
    cy.get('[data-cy="editable-input"]').type(specialValue, { parseSpecialCharSequences: false });
  });

  // it('Display the abm component selection', () => {
  //   cy.visit('/');
  //   cy.get('[cy-selector="abm-selection"]').should('be.ok');
  //   cy.get('[cy-selector="abm-list"]').should('be.ok');
  // });

  // it('should display a list of options', () => {
  //   cy.get('[cy-selector="option"]').should('be.ok');
  // });

  // it('should be disabled the NEXT button when not selecting an option', () => {
  //   cy.get('[cy-selector="button-next"]').should('be.disabled');
  // });

  // it('should should display the option selected when user clicks next button', () => {
  //   cy.get('[cy-selector="option-0"]').click();
  //   cy.get('[cy-selector="button-next"]').should('be.enabled').click();
  //   cy.get('[cy-selector="options-selected"]').should('be.ok');
  //   cy.get('[cy-selector="button-back"]').should('be.ok');
  // });
});
