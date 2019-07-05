// / <reference types="Cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('Successfully visit a page', () => {
  it('Visits the Authors Haven API base', () => {
    cy.visit('http://kingsmen-ah-backend-staging.herokuapp.com/api/v1');

    cy.contains('Welcome to the Authors Haven API');
  });
});
