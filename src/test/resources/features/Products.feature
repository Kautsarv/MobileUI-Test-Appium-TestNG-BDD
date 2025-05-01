Feature: Shopping Catalog Page

  @PositiveCase
  Scenario: User Successfully Checkout Product
    Given User open login page
    And User login with username "bod@example.com" and password "10203040"
    When User order "2" product "Sauce Labs Backpack (orange)" with Color "Unknown"
    Then User verify order in cart
    When User proceed to checkout
    And User submit shipping address
    And User submit payment method
    Then User shown review order page
    When User submit place order
    Then User successfully checkout and order

  @PositiveCase
  Scenario: User Successfully Remove Item From Cart
    Given User open catalog page
    And User order "4" product "Sauce Labs Backpack" with Color "Black"
    And Open cart menu
    When User remove item from cart
    Then Item successfully removed

  @PositiveCase
  Scenario: User Successfully Submit Review Product
    Given User open catalog page
    When User submit review "Sauce Labs Backpack (green)" with "5" stars
    Then User successfully submit product review

  @PositiveCase
  Scenario: User Successfully Sort Product
    Given User open catalog page
    When User sort product by "Name - Descending"
    Then Product successfully sorted by "Name - Descending"
    When User sort product by "Price - Ascending"
    Then Product successfully sorted by "Price - Ascending"
    When User sort product by "Price - Descending"
    Then Product successfully sorted by "Price - Descending"
    When User sort product by "Name - Ascending"
    Then Product successfully sorted by "Name - Ascending"

  @NegativeCase
  Scenario: User Add Product To Cart With 0 Quantity
    Given User open catalog page
    When User order "0" product "Sauce Labs Backpack" with Color "Green"
    Then User unable to add product into cart

    #This case expected to be failed because there is missing label in Country error message
  @NegativeCase
  Scenario: User Submit Shipping Address With Empty Mandatory Fields
    Given User open login page
    And User login with username "bod@example.com" and password "10203040"
    And User order "1" product "Sauce Labs Backpack" with Color "Blue"
    And Open cart menu
    And User proceed to checkout
    When User submit shipping address with empty "Full Name"
    Then User shown error "Please provide your full name." in shipping address screen
    When User submit shipping address with empty "Address Line 1"
    Then User shown error "Please provide your address." in shipping address screen
    When User submit shipping address with empty "City"
    Then User shown error "Please provide your city." in shipping address screen
    When User submit shipping address with empty "Zip Code"
    Then User shown error "Please provide your zip" in shipping address screen
    When User submit shipping address with empty "Country"
    Then User shown error "Please provide you country." in shipping address screen

  @NegativeCase
  Scenario: User Submit Payment Method With Empty Mandatory Fields
    Given User open login page
    And User login with username "bod@example.com" and password "10203040"
    And User order "1" product "Sauce Labs Backpack" with Color "Blue"
    And Open cart menu
    And User proceed to checkout
    And User submit shipping address
    When User submit payment method with empty "Full Name"
    Then User shown error "Value looks invalid." in "Full Name" field in payment method screen
    When User submit payment method with empty "Card Number"
    Then User shown error "blank" in "Card Number" field in payment method screen
    When User submit payment method with empty "Expiration Date"
    Then User shown error "Value looks invalid." in "Expiration Date" field in payment method screen
    When User submit payment method with empty "Security Code"
    Then User shown error "Value looks invalid." in "Security Code" field in payment method screen
