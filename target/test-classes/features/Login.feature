Feature: User Login Page

  Background:
    Given User open login page

  @PositiveCase
  Scenario Outline: User Successfully Login and Logout With Valid Credential
    When User login with username "<Username>" and password "<Password>"
    Then User successfully login
    When User logout account
    Then User successfully logout

    Examples:
      | Username           | Password |
      | bod@example.com    | 10203040 |
      | visual@example.com | 10203040 |

  @NegativeCase
  Scenario: User Not Allowed To Login Using Locked Account
    When User login with username "alice@example.com" and password "10203040"
    Then User failed to login
    And User shown error "Account Locked"

  @NegativeCase
  Scenario: User Submit Login With Empty Field
    When User login with username "NULL" and password "10203040"
    Then User shown error "Username is required"
    When User login with username "alice@example.com" and password "NULL"
    Then User shown error "Enter Password"
    When User login with username "NULL" and password "NULL"
    Then User shown error "Username is required"
