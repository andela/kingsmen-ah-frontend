// / <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('Successfully visit a page', () => {
  it('Visits the Authors Haven API base', () => {
    cy.visit('/');

    cy.contains('Welcome to the Authors Haven API');
  });
});
