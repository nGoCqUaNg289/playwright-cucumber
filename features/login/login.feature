Feature: Login Functionality

  Scenario: Successful login
    Given I navigate to login page "https://www.saucedemo.com/"
    When I login with username "standard_user" and password "secret_sauce"
    And I click the "Login" button
    Then I should see title for "Products"