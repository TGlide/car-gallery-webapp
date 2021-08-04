/// <reference types="cypress" />

const carImage = '[data-testid="car-1-image"]'
const buttons = '[data-testid="car-1-image"] .buttons'
const viewButton = '[data-testid="car-1-image"] .buttons button:nth-child(1)'

describe('Index page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('scrolls to gallery when view gallery is clicked', () => {
    cy.get('[data-testid="view-gallery"]').click()
    cy.window().then(($window) => {
      const viewportHeight = Cypress.config('viewportHeight')

      expect($window.scrollY).to.be.closeTo(viewportHeight, 100)
    })
  })

  it('shows car image buttons', async () => {
    cy.get(carImage).scrollIntoView()
    cy.get(buttons).should('not.be.visible')
    cy.get(carImage).realHover()
    cy.get(buttons).should('be.visible')
  })

  it('view button redirects to car page', () => {
    cy.get(carImage).realHover()
    cy.get(viewButton).click()
    cy.url().should('include', 'car/1')
  })
})
