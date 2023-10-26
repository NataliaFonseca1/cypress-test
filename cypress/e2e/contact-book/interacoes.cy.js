beforeEach(()=>{
  cy.visit('https://agenda-contatos-react.vercel.app/')
})


describe('testar inclusão de item', () => {
  it('deve verificar a inclusão de itens 1', () => {
    cy.get('input[type="text"]').type('gian Souza');
    cy.get('input[type="tel"]').type('11912345678');
    cy.get('input[type="email"]').type('gian@ebac.com.br');
    cy.get('button[type="submit"]').click();

    cy.get('input[type="text"]').type('Gian');
    cy.get('input[type="tel"]').type('117878755454');
    cy.get('input[type="email"]').type('gianprofessor@ebac.com.br');
    cy.get('button[type="submit"]').click();

    cy.get('.contato').should('have.length.gt', 1); // Verifique se há 1 item na lista.
  })

  it('deve verificar a exclusao de um item', () => {
    //cy.get('input[type="text"]').type('gian Souza');
    //cy.get('input[type="tel"]').type('11912345678');
    //cy.get('input[type="email"]').type('gian@ebac.com.br');
    cy.get('.contato:first .delete').click();
    //cy.get('.contato:first').should('have.length', 0); // Verifique se há 1 item na lista.
  })
});
describe('testar exclusao de item', () => {
it('deve verificar a edição de itens', () => {
  // Suponhamos que você queira editar o primeiro item na lista.
  cy.get('.contato:eq(1) .edit').click();
  cy.get('input[type="text"]').clear().type('Novo Nome');
  cy.get('input[type="tel"]').clear().type('999999999');
  cy.get('input[type="email"]').clear().type('novo@email.com');
  cy.get('.alterar').click();

})
})