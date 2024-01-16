/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner').eq(2).click()
        cy.get('#lab-title-description > a').should('contain', 'Descrição')
    });

});