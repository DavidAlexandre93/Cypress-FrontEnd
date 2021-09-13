/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão Assista na pagina Home
    clicarResultadoExames() {
        cy.get(loginElements.resultadoExames()).click()
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
        cy.get(loginElements.validarTexto()).should('contain', 'Resultados de Exames')
    }

    /* Visualizar mensagem de erro "Usuário ou senha inválidos."
    visualizarErroLogin() {
        cy.get(loginElements.mensagemErro()).should('contain', 'Usuário ou senha inválidos.')
    }*/
    
}

export default LoginPage;
