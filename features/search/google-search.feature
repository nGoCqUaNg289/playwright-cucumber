@search
Feature: Search Functionality

  Scenario: Search on Google
    Given I navigate to "https://www.google.com"
    When I type "Playwright" into the search box
    And I press the "Enter" key
    Then I should see search results for "Playwright"

    
  Scenario: Search with empty string
    Given I navigate to "https://www.google.com"
    When I type "   " into the search box
    And I press the "Enter" key
    Then I should see an error message