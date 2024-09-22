Feature: Admin functionality

Scenario:TC-05 verify user can click on Admin option to view the user records
    Given user navigates to application
    When user enters username "Admin" and password "admin123"
    And clicks on Login button
    And user clicks in Admin option
    Then user should view the records found message
    And user should view the user records