Feature: Acesso ao site Dasa

    @testedasa
    Scenario: Acessar o site Salomao Zoppi
        Given acesso o site Salomao Zoppi
        When acesso o resultados de exames
        Then devo visualiar o texto

    