describe("Lambda Eats", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it('can add text to the box and clear it', () => {
    cy.get('.text__box')
      .type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
  })
});