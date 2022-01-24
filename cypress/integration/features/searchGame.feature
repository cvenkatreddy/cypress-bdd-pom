Feature: Search a Book of Dead game

   Scenario: Search and play book of dead game
      Given I Launch home page
      When I Search for a game "Book of Dead"
      Then I should see searched game is verifyGameVisible
      When I select play a game
      Then I should navigate to game "/slots/book-of-dead"
