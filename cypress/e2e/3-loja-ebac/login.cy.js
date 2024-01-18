/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade de login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    })

    //afterEach(() => {
      //  cy.screenshot()

   // });

    it('deve fazer login com sucesso', () => {
        cy.get('#username').type('flavio.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, flavio.teste (não é flavio.teste? Sair)')
    })

    it('login com e-mail inválido e senha válida', () => {
        cy.get('#username').type('flavio.teste2@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('login com e-mail válido e senha inválida', () => {
        cy.get('#username').type('flavio.teste@teste.com.br')
        cy.get('#password').type('testes@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail flavio.teste@teste.com.br está incorreta. Perdeu a senha?')
    })

    it('Deve fazer login com massa de dados', () => {

        cy.get('#username').type(perfil.emailExistente)
        cy.get('#password').type(perfil.senhaValida)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, flavio.teste (não é flavio.teste? Sair)')
        
    });

    it.only('Deve fazer login usando fixture', () => {

        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.emailExistente, {log:false})
            cy.get('#password').type(dados.senhaValida, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, flavio.teste (não é flavio.teste? Sair)')
        })
    });
 
})