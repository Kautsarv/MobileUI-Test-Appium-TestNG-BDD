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
  "duration": 9311112883,
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
  "duration": 3527979924,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userSuccessfullyLogin()"
});
formatter.result({
  "duration": 7039225895,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userLogoutAccount()"
});
formatter.result({
  "duration": 1873853784,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userSuccessfullyLogout()"
});
formatter.result({
  "duration": 856330753,
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
  "duration": 7862523394,
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
  "duration": 3466545812,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userSuccessfullyLogin()"
});
formatter.result({
  "duration": 7038371531,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userLogoutAccount()"
});
formatter.result({
  "duration": 1983244873,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userSuccessfullyLogout()"
});
formatter.result({
  "duration": 725884778,
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
  "duration": 7076425459,
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
  "duration": 3879361857,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.userFailedToLogin()"
});
formatter.result({
  "duration": 517242328,
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
  "duration": 185823302,
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
  "duration": 8068323212,
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
  "duration": 4398535631,
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
  "duration": 174616281,
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
  "duration": 4374489735,
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
  "duration": 178205624,
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
  "duration": 4585574952,
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
  "duration": 160400105,
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
  "duration": 1978291094,
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
