// 我是 cypress 範例程式
// describe('My First Test', function() {
//     it('finds the content "type"', function() {
//       cy.visit('https://example.cypress.io')

//       cy.pause()
  
//       cy.contains('type').click()

//       cy.url().should('include', '/commands/actions')

//       cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//     })
//   })

// describe('My First Test', function() {
//     it('finds the content "type"', function() {
//       cy.visit('/')
  
//       // cy.contains('其他').click()

//       cy.get('#dropdown-right').click()
      
//       cy.get('.dropdown-menu').should('have.class', 'show')

//       // cy.get('#dropdown-right').click()
      
//       // cy.get('.dropdown-menu').should('have.class', 'show')
//     })
//   })


const testingJS = require('../../components/main.vue');

describe('My First Test', function() {
  it('test add ', function() {
    expect(2 + 2).to.equal(4);
    expect(testingJS.data().msg).to.equal('Logo');
  });
})