import seats from '../fixtures/seats'

describe('Тесты сайта кинотеатра', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Тестирование количества дней', () => {
    cy.get('.page-nav__day').should('have.length', 7)
    
  })
  

  it('Тестирование даты сеанса, выбора фильма и бронирования мест', () => {
    cy.get('.page-nav__day:nth-of-type(6)').click()
    cy.get('.movie').eq(0).contains('13:00').click()
      seats.forEach((seat) => {
        cy.get(`:nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
    })
    cy.get('.acceptin-button').click()
    cy.contains("Вы выбрали билеты:").should('be.visible')
  })
})