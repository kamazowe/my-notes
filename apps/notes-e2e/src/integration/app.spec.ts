import { getGreeting } from '../support/app.po';

describe('notes', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to notes!');
  });
});
