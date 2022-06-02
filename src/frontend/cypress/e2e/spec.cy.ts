describe('My First Test', () => {

  beforeEach(() => {
    cy.visit('/');
  });


  it('Check title', () => {
    cy.contains('Taschenrechner')
  })

  it('Do addition', () => {
    cy.get('[data-cy="firstInput"]').type('10');
    cy.get('[data-cy="secondInput"]').type('120');
    cy.get('[data-cy="add"]').click();
    cy.get('[data-cy="result"]',{ timeout: 10000 }).should('have.value', '130');
  })
})
