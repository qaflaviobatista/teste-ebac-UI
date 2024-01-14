/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import { should } from 'chai';

describe('funcionalidade de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    // Caminho feliz
    it('deve fazer pré-cadastro com sucesso', () => {
        var nome = faker.name.firstName()
        var sobrenome = faker.name.lastName()
        var email = faker.internet.email(nome+sobrenome)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')
            .click()
        cy.get('#account_first_name').type(nome);
        cy.get('#account_last_name').type(sobrenome);
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    })
    // Unhappy way
    it('Tentativa de novo cadastro com e-mail já existente', () => {
        cy.get('#reg_email').type('flavio.teste@teste.com.br')
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.')
})


})