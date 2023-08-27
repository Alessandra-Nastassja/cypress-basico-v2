Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.get('#firstName').type('Alessandra');
  cy.get('#lastName').type('Santos');
  cy.get('#email').type('alessandra@hotmail.com');
  cy.get('#open-text-area').type('Lorem');

  cy.contains('button', 'Enviar').click();
}); 