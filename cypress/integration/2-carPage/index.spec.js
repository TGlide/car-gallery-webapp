/// <reference types="cypress" />

const backBtn = '[data-testid="back-btn"]'
const modal = '[data-testid="modal"]'
const modalClose = '[data-testid="modal-close"]'
const viewButton = '[data-testid="car-0-image"] .buttons button:nth-child(1)'
const carImage = '[data-testid="car-0-image"]'

describe('Car page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/car/1')
  })

  it('should be able to open modal', () => {
    cy.get(carImage).realHover()
    cy.get(viewButton).click()
    cy.get(modal).should('be.visible')
  })

  it('should be able to close modal', () => {
    cy.get(carImage).realHover()
    cy.get(viewButton).click()
    cy.get(modal).should('be.visible')

    cy.get(modalClose).click()
    cy.get(modal).should('not.exist')
  })

  it('should be able to go back', () => {
    cy.get(backBtn).click()
    cy.url().should('not.contain', 'car/1')
  })
})
