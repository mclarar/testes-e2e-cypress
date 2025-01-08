it('Deve permitir que a pessoa usuária faça o seu cadastro, realize login na aplicação, realize uma transação e faça um logout', () => {
    cy.visit('/');

    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Gui Lima');
    cy.getByData('email-input').type('gui@email.com');
    cy.getByData('senha-input').type('456789');
    cy.getByData('botao-enviar').click();

    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');
    cy.location('pathname').should('eq', '/');

    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('gui@email.com');
    cy.getByData('senha-input').type('456789');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');
  });