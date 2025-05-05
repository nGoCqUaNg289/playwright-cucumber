Feature: Login Functionality

  Scenario Outline: Login with different credentials
    Given I navigate to login page "https://www.saucedemo.com/"
    When I login with username "<username>" and password "<password>"
    And I click the "Login" button
    Then I should see "<result>"

    Examples:
      | username       | password      | result           |
      | standard_user  | secret_sauce  | Products       |
      | locked_out_user| secret_sauce  | Epic sadface: Sorry, this user has been locked out. |
      | standard_user  | wrong_pass    | Epic sadface: Username and password do not match any user in this service |
      |                | secret_sauce  | Epic sadface: Username is required |
      | standard_user  |               | Epic sadface: Password is required |