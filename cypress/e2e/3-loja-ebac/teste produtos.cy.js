/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })
  
    it('Deve selecionar um produto da lista', () => {
      cy.get('.block-inner').eq(2).click()
      cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
  
    it('Deve configurar um produto com tamanho, cor e quantidade', () => {
      // Obtenha o número total de elementos na lista de produtos
      cy.get('.block-inner').should('have.length').then((totalProdutos) => {
        // Gere um índice aleatório entre 0 e o número total de produtos - 1
        const indiceAleatorio = Cypress._.random(0, totalProdutos - 1);
  
        // Selecione aleatoriamente um produto com base no índice gerado e clique nele
        cy.get('.block-inner').eq(indiceAleatorio).click();
  
        // Adicione o código para configurar tamanho, cor e quantidade conforme necessário
        cy.get(':nth-child(1) > .value > .variable-items-wrapper').eq().click();
        // Adicione mais comandos conforme necessário para a configuração do produto
      });
    });
  });