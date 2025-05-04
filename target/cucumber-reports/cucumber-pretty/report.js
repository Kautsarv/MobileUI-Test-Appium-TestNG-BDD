$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Page",
  "description": "",
  "id": "user-login-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User Successfully Login and Logout With Valid Credential",
  "description": "",
  "id": "user-login-page;user-successfully-login-and-logout-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User login with username \"\u003cUsername\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User logout account",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User successfully logout",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "user-login-page;user-successfully-login-and-logout-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 14,
      "id": "user-login-page;user-successfully-login-and-logout-with-valid-credential;;1"
    },
    {
      "cells": [
        "bod@example.com",
        "10203040"
      ],
      "line": 15,
      "id": "user-login-page;user-successfully-login-and-logout-with-valid-credential;;2"
    },
    {
      "cells": [
        "visual@example.com",
        "10203040"
      ],
      "line": 16,
      "id": "user-login-page;user-successfully-login-and-logout-with-valid-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.userOpenLoginPage()"
});
formatter.result({
  "duration": 10007419259,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Successfully Login and Logout With Valid Credential",
  "description": "",
  "id": "user-login-page;user-successfully-login-and-logout-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User login with username \"bod@example.com\" and password \"10203040\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User logout account",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User successfully logout",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "bod@example.com",
      "offset": 26
    },
    {
      "val": "10203040",
      "offset": 57
    }
  ],
  "location": "LoginStepDef.userSubmitValidAnd(String,String)"
});
formatter.result({
  "duration": 3542845141,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userSuccessfullyLogin()"
});
formatter.result({
  "duration": 7059583910,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userLogoutAccount()"
});
formatter.result({
  "duration": 1881987729,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userSuccessfullyLogout()"
});
formatter.result({
  "duration": 877180760,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.userOpenLoginPage()"
});
formatter.result({
  "duration": 6516055032,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Successfully Login and Logout With Valid Credential",
  "description": "",
  "id": "user-login-page;user-successfully-login-and-logout-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User login with username \"visual@example.com\" and password \"10203040\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User logout account",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User successfully logout",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "visual@example.com",
      "offset": 26
    },
    {
      "val": "10203040",
      "offset": 60
    }
  ],
  "location": "LoginStepDef.userSubmitValidAnd(String,String)"
});
formatter.result({
  "duration": 4069338431,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userSuccessfullyLogin()"
});
formatter.result({
  "duration": 7049002861,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userLogoutAccount()"
});
formatter.result({
  "duration": 1889542905,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userSuccessfullyLogout()"
});
formatter.result({
  "duration": 772292211,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.userOpenLoginPage()"
});
formatter.result({
  "duration": 7932588820,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Not Allowed To Login Using Locked Account",
  "description": "",
  "id": "user-login-page;user-not-allowed-to-login-using-locked-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User login with username \"alice@example.com\" and password \"10203040\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User failed to login",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User shown error \"Account Locked\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "alice@example.com",
      "offset": 26
    },
    {
      "val": "10203040",
      "offset": 59
    }
  ],
  "location": "LoginStepDef.userSubmitValidAnd(String,String)"
});
formatter.result({
  "duration": 4277198940,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userFailedToLogin()"
});
formatter.result({
  "duration": 18878042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Locked",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.userShownError(String)"
});
formatter.result({
  "duration": 244747138,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.userOpenLoginPage()"
});
formatter.result({
  "duration": 7292458587,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Submit Login With Empty Field",
  "description": "",
  "id": "user-login-page;user-submit-login-with-empty-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User login with username \"NULL\" and password \"10203040\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User shown error \"Username is required\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User login with username \"alice@example.com\" and password \"NULL\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User shown error \"Enter Password\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User login with username \"NULL\" and password \"NULL\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User shown error \"Username is required\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "NULL",
      "offset": 26
    },
    {
      "val": "10203040",
      "offset": 46
    }
  ],
  "location": "LoginStepDef.userSubmitValidAnd(String,String)"
});
formatter.result({
  "duration": 4289773068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username is required",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.userShownError(String)"
});
formatter.result({
  "duration": 212194394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alice@example.com",
      "offset": 26
    },
    {
      "val": "NULL",
      "offset": 59
    }
  ],
  "location": "LoginStepDef.userSubmitValidAnd(String,String)"
});
formatter.result({
  "duration": 4404329689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter Password",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.userShownError(String)"
});
formatter.result({
  "duration": 194108850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NULL",
      "offset": 26
    },
    {
      "val": "NULL",
      "offset": 46
    }
  ],
  "location": "LoginStepDef.userSubmitValidAnd(String,String)"
});
formatter.result({
  "duration": 4303629794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username is required",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.userShownError(String)"
});
formatter.result({
  "duration": 241372608,
  "status": "passed"
});
formatter.uri("Products.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Catalog Page",
  "description": "",
  "id": "shopping-catalog-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsStepDef.userOpenCatalogPage()"
});
formatter.result({
  "duration": 2450600530,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User Successfully Checkout Product",
  "description": "",
  "id": "shopping-catalog-page;user-successfully-checkout-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User order \"2\" product \"Sauce Labs Backpack\" with Color \"Blue\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User verify order in cart",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User proceed to checkout",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User submit shipping address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User submit payment method",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User shown review order page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User submit place order",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User successfully checkout and order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    },
    {
      "val": "Sauce Labs Backpack",
      "offset": 24
    },
    {
      "val": "Blue",
      "offset": 57
    }
  ],
  "location": "ProductsStepDef.userOrderProductWithColor(int,String,String)"
});
formatter.result({
  "duration": 4879706002,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userVerifyOrderInCart()"
});
formatter.result({
  "duration": 1267181525,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userProceedToCheckout()"
});
formatter.result({
  "duration": 4840260202,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userSubmitShippingAddress()"
});
formatter.result({
  "duration": 21882285851,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userSubmitPaymentMethod()"
});
formatter.result({
  "duration": 11416092520,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userShownReviewOrderPage()"
});
formatter.result({
  "duration": 6607943142,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userSubmitPlaceOrder()"
});
formatter.result({
  "duration": 135989488,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userSuccessfullyCheckoutAndOrder()"
});
formatter.result({
  "duration": 4801349957,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsStepDef.userOpenCatalogPage()"
});
formatter.result({
  "duration": 2749304565,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Successfully Remove Item From Cart",
  "description": "",
  "id": "shopping-catalog-page;user-successfully-remove-item-from-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User order \"4\" product \"Sauce Labs Backpack\" with Color \"Black\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Open cart menu",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User remove item from cart",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Item successfully removed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 12
    },
    {
      "val": "Sauce Labs Backpack",
      "offset": 24
    },
    {
      "val": "Black",
      "offset": 57
    }
  ],
  "location": "ProductsStepDef.userOrderProductWithColor(int,String,String)"
});
formatter.result({
  "duration": 6261166476,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.orderAddedToCart()"
});
formatter.result({
  "duration": 132510733,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userRemoveItemFromCart()"
});
formatter.result({
  "duration": 1259833927,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.itemSuccessfullyRemoved()"
});
formatter.result({
  "duration": 4530857634,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsStepDef.userOpenCatalogPage()"
});
formatter.result({
  "duration": 2510330032,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Successfully Submit Review Product",
  "description": "",
  "id": "shopping-catalog-page;user-successfully-submit-review-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User submit review \"Sauce Labs Backpack (green)\" with \"5\" stars",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User successfully submit product review",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Backpack (green)",
      "offset": 20
    },
    {
      "val": "5",
      "offset": 55
    }
  ],
  "location": "ProductsStepDef.userSubmitReviewWithStars(String,int)"
});
formatter.result({
  "duration": 110430472,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userSuccessfullySubmitProductReview()"
});
formatter.result({
  "duration": 786199525,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsStepDef.userOpenCatalogPage()"
});
formatter.result({
  "duration": 2746431089,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User Successfully Sort Product",
  "description": "",
  "id": "shopping-catalog-page;user-successfully-sort-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User sort product by \"Name - Descending\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Product successfully sorted by \"Name - Descending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "User sort product by \"Price - Ascending\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Product successfully sorted by \"Price - Ascending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "User sort product by \"Price - Descending\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Product successfully sorted by \"Price - Descending\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User sort product by \"Name - Ascending\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Product successfully sorted by \"Name - Ascending\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Name - Descending",
      "offset": 22
    }
  ],
  "location": "ProductsStepDef.userSortProductBy(String)"
});
formatter.result({
  "duration": 1415842791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name - Descending",
      "offset": 32
    }
  ],
  "location": "ProductsStepDef.productSuccessfullySortedBy(String)"
});
formatter.result({
  "duration": 652197952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price - Ascending",
      "offset": 22
    }
  ],
  "location": "ProductsStepDef.userSortProductBy(String)"
});
formatter.result({
  "duration": 730645327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price - Ascending",
      "offset": 32
    }
  ],
  "location": "ProductsStepDef.productSuccessfullySortedBy(String)"
});
formatter.result({
  "duration": 1361445095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price - Descending",
      "offset": 22
    }
  ],
  "location": "ProductsStepDef.userSortProductBy(String)"
});
formatter.result({
  "duration": 719865179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price - Descending",
      "offset": 32
    }
  ],
  "location": "ProductsStepDef.productSuccessfullySortedBy(String)"
});
formatter.result({
  "duration": 1434764547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name - Ascending",
      "offset": 22
    }
  ],
  "location": "ProductsStepDef.userSortProductBy(String)"
});
formatter.result({
  "duration": 1490189499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name - Ascending",
      "offset": 32
    }
  ],
  "location": "ProductsStepDef.productSuccessfullySortedBy(String)"
});
formatter.result({
  "duration": 606641300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsStepDef.userOpenCatalogPage()"
});
formatter.result({
  "duration": 2269754275,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "User Add Product To Cart With 0 Quantity",
  "description": "",
  "id": "shopping-catalog-page;user-add-product-to-cart-with-0-quantity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User order \"0\" product \"Sauce Labs Backpack\" with Color \"Green\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User unable to add product into cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 12
    },
    {
      "val": "Sauce Labs Backpack",
      "offset": 24
    },
    {
      "val": "Green",
      "offset": 57
    }
  ],
  "location": "ProductsStepDef.userOrderProductWithColor(int,String,String)"
});
formatter.result({
  "duration": 4263440563,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userUnableToAddProductIntoCart()"
});
formatter.result({
  "duration": 59297481,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsStepDef.userOpenCatalogPage()"
});
formatter.result({
  "duration": 2114319521,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 45,
      "value": "#This case expected to be failed because there is missing label in Zip Code error message"
    }
  ],
  "line": 47,
  "name": "User Submit Shipping Address With Empty Mandatory Fields",
  "description": "",
  "id": "shopping-catalog-page;user-submit-shipping-address-with-empty-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "User order \"1\" product \"Sauce Labs Backpack\" with Color \"Blue\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Open cart menu",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User submit shipping address with empty \"Full Name\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User shown error \"Please provide your full name.\" in shipping address screen",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User submit shipping address with empty \"Address Line 1\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User shown error \"Please provide your address.\" in shipping address screen",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "User submit shipping address with empty \"City\"",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User shown error \"Please provide your city.\" in shipping address screen",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User submit shipping address with empty \"Zip Code\"",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "User shown error \"Please provide your zip\" in shipping address screen",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "User submit shipping address with empty \"Country\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User shown error \"Please provide you country.\" in shipping address screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    },
    {
      "val": "Sauce Labs Backpack",
      "offset": 24
    },
    {
      "val": "Blue",
      "offset": 57
    }
  ],
  "location": "ProductsStepDef.userOrderProductWithColor(int,String,String)"
});
formatter.result({
  "duration": 3568093191,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.orderAddedToCart()"
});
formatter.result({
  "duration": 686669193,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userProceedToCheckout()"
});
formatter.result({
  "duration": 5337469628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name",
      "offset": 41
    }
  ],
  "location": "ProductsStepDef.userSubmitShippingAddressWithEmpty(String)"
});
formatter.result({
  "duration": 19738251274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please provide your full name.",
      "offset": 18
    }
  ],
  "location": "ProductsStepDef.userShownErrorInShippingAddressScreen(String)"
});
formatter.result({
  "duration": 6088749584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Line 1",
      "offset": 41
    }
  ],
  "location": "ProductsStepDef.userSubmitShippingAddressWithEmpty(String)"
});
formatter.result({
  "duration": 19993207630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please provide your address.",
      "offset": 18
    }
  ],
  "location": "ProductsStepDef.userShownErrorInShippingAddressScreen(String)"
});
formatter.result({
  "duration": 6195083281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 41
    }
  ],
  "location": "ProductsStepDef.userSubmitShippingAddressWithEmpty(String)"
});
formatter.result({
  "duration": 19608735581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please provide your city.",
      "offset": 18
    }
  ],
  "location": "ProductsStepDef.userShownErrorInShippingAddressScreen(String)"
});
formatter.result({
  "duration": 6686111824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zip Code",
      "offset": 41
    }
  ],
  "location": "ProductsStepDef.userSubmitShippingAddressWithEmpty(String)"
});
formatter.result({
  "duration": 19810811402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please provide your zip",
      "offset": 18
    }
  ],
  "location": "ProductsStepDef.userShownErrorInShippingAddressScreen(String)"
});
formatter.result({
  "duration": 6589102792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Country",
      "offset": 41
    }
  ],
  "location": "ProductsStepDef.userSubmitShippingAddressWithEmpty(String)"
});
formatter.result({
  "duration": 18761902959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please provide you country.",
      "offset": 18
    }
  ],
  "location": "ProductsStepDef.userShownErrorInShippingAddressScreen(String)"
});
formatter.result({
  "duration": 565893942,
  "error_message": "java.lang.AssertionError: Error not match expected [Please provide you country.] but found [Please provide your]\n\tat org.testng.Assert.fail(Assert.java:97)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\n\tat org.testng.Assert.assertEquals(Assert.java:118)\n\tat org.testng.Assert.assertEquals(Assert.java:575)\n\tat page.ProductsPageObject.verifyShippingFormInputError(ProductsPageObject.java:329)\n\tat steps.ProductsStepDef.userShownErrorInShippingAddressScreen(ProductsStepDef.java:120)\n\tat ✽.Then User shown error \"Please provide you country.\" in shipping address screen(Products.feature:60)\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User open catalog page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsStepDef.userOpenCatalogPage()"
});
formatter.result({
  "duration": 1485328616,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "User Submit Payment Method With Empty Mandatory Fields",
  "description": "",
  "id": "shopping-catalog-page;user-submit-payment-method-with-empty-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@NegativeCase"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "User order \"1\" product \"Sauce Labs Backpack\" with Color \"Blue\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Open cart menu",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User submit shipping address",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User submit payment method with empty \"Full Name\"",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User shown error \"Value looks invalid.\" in \"Full Name\" field in payment method screen",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "User submit payment method with empty \"Card Number\"",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "User shown error \"blank\" in \"Card Number\" field in payment method screen",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "User submit payment method with empty \"Expiration Date\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "User shown error \"Value looks invalid.\" in \"Expiration Date\" field in payment method screen",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "User submit payment method with empty \"Security Code\"",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User shown error \"Value looks invalid.\" in \"Security Code\" field in payment method screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    },
    {
      "val": "Sauce Labs Backpack",
      "offset": 24
    },
    {
      "val": "Blue",
      "offset": 57
    }
  ],
  "location": "ProductsStepDef.userOrderProductWithColor(int,String,String)"
});
formatter.result({
  "duration": 4421376394,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.orderAddedToCart()"
});
formatter.result({
  "duration": 548781380,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userProceedToCheckout()"
});
formatter.result({
  "duration": 6823344676,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepDef.userSubmitShippingAddress()"
});
formatter.result({
  "duration": 18585015148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Full Name",
      "offset": 39
    }
  ],
  "location": "ProductsStepDef.userSubmitPaymentMethodWithEmpty(String)"
});
formatter.result({
  "duration": 11469108084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Value looks invalid.",
      "offset": 18
    },
    {
      "val": "Full Name",
      "offset": 44
    }
  ],
  "location": "ProductsStepDef.userShownErrorInFieldInPaymentMethodScreen(String,String)"
});
formatter.result({
  "duration": 6101744829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Card Number",
      "offset": 39
    }
  ],
  "location": "ProductsStepDef.userSubmitPaymentMethodWithEmpty(String)"
});
formatter.result({
  "duration": 10184801654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blank",
      "offset": 18
    },
    {
      "val": "Card Number",
      "offset": 29
    }
  ],
  "location": "ProductsStepDef.userShownErrorInFieldInPaymentMethodScreen(String,String)"
});
formatter.result({
  "duration": 6543706512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Expiration Date",
      "offset": 39
    }
  ],
  "location": "ProductsStepDef.userSubmitPaymentMethodWithEmpty(String)"
});
formatter.result({
  "duration": 10663372057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Value looks invalid.",
      "offset": 18
    },
    {
      "val": "Expiration Date",
      "offset": 44
    }
  ],
  "location": "ProductsStepDef.userShownErrorInFieldInPaymentMethodScreen(String,String)"
});
formatter.result({
  "duration": 6084804501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Security Code",
      "offset": 39
    }
  ],
  "location": "ProductsStepDef.userSubmitPaymentMethodWithEmpty(String)"
});
formatter.result({
  "duration": 9818832085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Value looks invalid.",
      "offset": 18
    },
    {
      "val": "Security Code",
      "offset": 44
    }
  ],
  "location": "ProductsStepDef.userShownErrorInFieldInPaymentMethodScreen(String,String)"
});
formatter.result({
  "duration": 6569337718,
  "status": "passed"
});
});