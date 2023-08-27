/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(() => cy.visit('../src/index.html'));

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
  });

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = "Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem";
    
    cy.get('#firstName').type('Alessandra');
    cy.get('#lastName').type('Santos');
    cy.get('#email').type('alessandra@hotmail.com');
    cy.get('#open-text-area').type(longText, { delay: 0 });
    
    cy.get('button[type="submit"]').click();

    cy.get('.success').should('be.visible');
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#email').clear();
    cy.get('#email').type('alessandra');

    cy.get('button[type="submit"]').click();

    cy.get('.error').should('be.visible');
  });



  xit('', () => {})
  xit('', () => {})
  xit('', () => {})
  xit('', () => {})
  xit('', () => {})
  xit('', () => {})
  xit('', () => {})
})