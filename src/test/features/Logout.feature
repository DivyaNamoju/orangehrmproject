Feature: Logout functionality

Scenario: TC-03 Verify user can logout from the application
    Given user navigates to application
    When user enters username "Admin" and password "admin123"
    And clicks on Login button
    Then user lands on Dashboard
    When user clicks on user dropdown
    And clicks on Logout
    Then user lands on Login page