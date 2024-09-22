Feature: Login functionality

Scenario: TC-01 verify user can login with valid credentials
    Given user navigates to application
    When user enters username "Admin" and password "admin123"
    And clicks on Login button
    Then user lands on Dashboard

Scenario: TC-01 verify user cannot login with invalid credentials
    Given user navigates to application
    When user enters username "Admin234" and password "admin123"
    And clicks on Login button
    Then user should view the warning message 

Scenario: TC-04 verify user can view the orange HRM logo image on Login page
    Given user navigates to application
    Then user should view the orange HRM logo image