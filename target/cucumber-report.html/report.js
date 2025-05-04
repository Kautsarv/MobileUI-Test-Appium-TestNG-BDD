$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Products.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Catalog Page",
  "description": "",
  "id": "shopping-catalog-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5924759268,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Successfully Checkout Product",
  "description": "",
  "id": "shopping-catalog-page;user-successfully-checkout-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@PositiveCase"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User open login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login with username \"bod@example.com\" and password \"10203040\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User order \"2\" product \"Sauce Labs Backpack (orange)\" with Color \"Unknown\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User verify order in cart",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User proceed to checkout",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User submit shipping address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User submit payment method",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User shown review order page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User submit place order",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User successfully checkout and order",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOpenLoginPage()"
});
formatter.result({
  "duration": 3693183086,
  "status": "passed"
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
  "location": "LoginSteps.userSubmitValidAnd(String,String)"
});
formatter.result({
  "duration": 4249222635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    },
    {
      "val": "Sauce Labs Backpack (orange)",
      "offset": 24
    },
    {
      "val": "Unknown",
      "offset": 66
    }
  ],
  "location": "ProductSteps.userOrderProductWithColor(int,String,String)"
});
formatter.result({
  "duration": 14047385150,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.userVerifyOrderInCart()"
});
formatter.result({
  "duration": 1105164143,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.userProceedToCheckout()"
});
formatter.result({
  "duration": 112115216,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.userSubmitShippingAddress()"
});
formatter.result({
  "duration": 21404993351,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.userSubmitPaymentMethod()"
});
formatter.result({
  "duration": 10657202265,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.userShownReviewOrderPage()"
});
formatter.result({
  "duration": 4235870466,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.userSubmitPlaceOrder()"
});
formatter.result({
  "duration": 75944121,
  "status": "passed"
});
formatter.match({
  "location": "ProductSteps.userSuccessfullyCheckoutAndOrder()"
});
formatter.result({
  "duration": 3826867298,
  "status": "passed"
});
formatter.after({
  "duration": 234883036,
  "status": "passed"
});
});