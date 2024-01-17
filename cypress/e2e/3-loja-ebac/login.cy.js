/// <reference types="cypress"/>

describe('funcionalidade de login', () => {
    const nomeDoSubdiretorio = 'login'; // Pode ser alterado manualmente
    const caminhoDoDiretorio = `C:\\repositorio\\teste-ebac-UI\\cypress\\screenshots\\${nomeDoSubdiretorio}`;

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    afterEach(() => {
        cy.screenshot()

    });

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
})