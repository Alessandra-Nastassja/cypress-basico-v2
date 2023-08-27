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
    
    cy.contains('button', 'Enviar').click();

    cy.get('.success').should('be.visible');
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#email')
      .clear()
      .type('alessandra');

    cy.contains('button', 'Enviar').click();

    cy.get('.error').should('be.visible');
  });
  
  it('verifica se campo de telefone continua vazio cado preenchido com valor não-numérico', () => {
    cy.get('#phone')
      .type('é numerico ?')
      .should('have.value', '');
  });

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Alessandra');
    cy.get('#lastName').type('Santos');
    cy.get('#email').type('alessandra@hotmail.com');
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Lorem');
    
    cy.contains('button', 'Enviar').click();

    cy.get('.error').should('be.visible');
  });

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Alessandra')
      .should('have.value', 'Alessandra')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Santos')
      .should('have.value', 'Santos')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('alessandra@hotmail.com')
      .should('have.value', 'alessandra@hotmail.com')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('11959281234')
      .should('have.value', '11959281234')
      .clear()
      .should('have.value', '')
  });

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click();

    cy.get('.error').should('be.visible');
  });

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit();
    
    cy.get('.success').should('be.visible');
  })
})