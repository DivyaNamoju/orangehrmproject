Feature: Login functionality

  Scenario: TC-01 verify user can login with valid credentials
    Given user is on application
    When user enters username "Admin"
    And user enter password "admin123"
    And clicks on Sign in button
    Then user lands on dashboard

  Scenario: TC-02 verify user cannot login with invalid credentials
    Given user is on application
    When user enters username "Admin"
    And user enter password "admin1234"
    And clicks on Sign in button
    Then user views invalid credentials message
