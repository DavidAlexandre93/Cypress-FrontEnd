/* global Given, Then, When */

import ResultadosExamesPage from '../pageobjects/ResultadosExames/ResultadosExamesPage'
const resultadosexamesPage = new ResultadosExamesPage

/*And("informo {} incorreto", (email) => {
    loginPage.informarEmail(email);
})*/

/*And("informo {} incorreta", (senha) => {
    loginPage.informarSenha(senha);
})*/

Given("acesso o site Salomao Zoppi", () => {
    resultadosexamesPagePage.acessarSite();
})

/*When("acesso a pagina Home", () => {
    loginPage.clicarBotaoPaginaLogin();
})*/

When("acesso o resultados de exames", () => {
    resultadosexamesPagePage.clicarResultadoExames();
})

Then("devo visualiar o texto", () => {
    resultadosexamesPagePage.visualizarTexto();
})

/*Then("devo visualizar mensagem de erro", () => {
    loginPage.visualizarErroLogin();
})*/