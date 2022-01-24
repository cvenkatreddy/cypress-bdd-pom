Feature: Language Switching
    As a player, I want to choose the language, so the application should reload with a chosen language

    Scenario Outline: Language <languageType> switching
        Given I Launch home page
        When I select language "<languageType>"
        Then I should see the application has navigated to page "<pageUrl>"

        Examples:
            | languageType      | pageUrl |
            | EESTI             | /ee     |
            | SUOMI             | /fi     |
            | РУССКИЙ (Эстония) | /ru     |