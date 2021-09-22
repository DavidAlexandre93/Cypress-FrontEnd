/// <reference types="Cypress" />

import ResultadosExamesElements from '../elements/ResultadosExames/ResultadosExamesElements'
const resultadosexamesElements = new ResultadosExamesElements
const url = Cypress.config("baseUrl")

class ResultadosExamesPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão Assista na pagina Home
    clicarResultadoExames() {
        cy.get(resultadosexamesElements.resultadoExames()).click()
    }

    /* Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
    }*/

    /* Informa email no input do email
    informarEmail(email) {
        cy.get(loginElements.inputEmail()).type(email,{ log:false })
    }*/

    /*Informa senha no input da senha
    informarSenha(senha) {
        cy.get(loginElements.inputSenha()).type(senha,{ log:false })
    }*/

    //Verifica se o texto "Manifesto Dasa" está disponivel
    visualizarTexto() {
        cy.get(resultadosexamesElements.validarTexto()).should('contain', 'Resultados de Exames')
    }

    /* Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarErroLogin() {
        cy.get(loginElements.mensagemErro()).should('contain', 'Usuário ou senha inválidos.')
    }*/
    
}

export default ResultadosExamesPage;
