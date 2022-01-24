Feature: Menu Navigation
    As a player, I can navigate to different menus to choose various game options

    Background: Open Application on mobile
        Given I Launch application on mobile

    Scenario Outline: Menu <submenuItem> navigation
        Given I Launch home page
        When I click on burger button
        Then I verify the main menu types
            | Home             |
            | CASINO           |
            | LIVE CASINO      |
            | SPORTS BETTING   |
            | LIVE BETTING     |
            | PROMOTIONS       |
            | Customer Support |
        When I select sub menu "<submenuItem>"
        Then I should see the application has navigated to page "<pageUrl>"

        Examples:
            | submenuItem | pageUrl         |
            | POPULAR     | /popular-games  |
            | NEW         | /new-games      |
            | SLOTS       | /slots          |
            | LIVE CASINO | /live-casino    |
            | JACKPOTS    | /jackpot-games  |
            | TABLE GAMES | /casino-games   |
            | MEGAWAYS    | /megaways-games |