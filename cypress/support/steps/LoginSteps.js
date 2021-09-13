/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

/*And("informo {} incorreto", (email) => {
    loginPage.informarEmail(email);
})*/

/*And("informo {} incorreta", (senha) => {
    loginPage.informarSenha(senha);
})*/

Given("acesso o site Salomao Zoppi", () => {
    loginPage.acessarSite();
})

/*When("acesso a pagina Home", () => {
    loginPage.clicarBotaoPaginaLogin();
})*/

When("acesso o resultados de exames", () => {
    loginPage.clicarResultadoExames();
})

Then("devo visualiar o texto", () => {
    loginPage.visualizarTexto();
})

/*Then("devo visualizar mensagem de erro", () => {
    loginPage.visualizarErroLogin();
})*/