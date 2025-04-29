Feature: Login Functionality

  Scenario: Successful login
    Given I navigate to login page "https://edp-paso-ui-test.mobifi.vn/flow/il_v1"
    When I type "0921883812" into the phone number box
    And I click the "Xác nhận" button
    Then I should see title for "Hồ sơ mở thẻ được ghi nhận cho kênh khai thác khác"