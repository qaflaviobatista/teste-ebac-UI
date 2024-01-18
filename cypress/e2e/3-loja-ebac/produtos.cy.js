/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
        
    })

   // afterEach(() => {
     //   cy.screenshot();

   // });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.block-inner').eq(2).click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it('Deve configurar um produto com tamanho, cor e quantidade e adicionar ao carrinho de compras', () => {
        //seleciona o terceiro produto da lista 
        cy.get('.block-inner').eq(2).click()
        //seleciona um tamanho
        cy.get(':nth-child(1) > .value > .variable-items-wrapper >').eq(0).click()
        //seleciona uma cor     
        cy.get(':nth-child(2) > .value > .variable-items-wrapper >').eq(0).click() //tive que manipular o seletor, inserindo um ">" ao final para conseguir selecionar os filhos
        //seleciona a quantidade
        cy.get('.plus').click().click()
        //clicar em comprar para adicionar ao carrinho
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').should('contain', 'Ver carrinho')

    });
});