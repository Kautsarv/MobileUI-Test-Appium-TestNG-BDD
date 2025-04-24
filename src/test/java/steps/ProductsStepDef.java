package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.ProductsPageObject;

public class ProductsStepDef {
    ProductsPageObject productsPageObject = new ProductsPageObject();

    @Given("^User open catalog page$")
    public void userOpenCatalogPage() {
        productsPageObject.launchApp();
        productsPageObject.openCatalogMenu();
        productsPageObject.verifyCatalogPageDisplayed();
    }

    @When("^User submit review \"([^\"]*)\" with \"([^\"]*)\" stars$")
    public void userSubmitReviewWithStars(String product, int stars) {
        productsPageObject.submitReview(product, stars);
    }

    @Then("^User successfully submit product review$")
    public void userSuccessfullySubmitProductReview() {
        productsPageObject.verifyReviewSucessMessageDisplayed();
    }

    @When("^User sort product by \"([^\"]*)\"$")
    public void userSortProductBy(String sortType) {
        productsPageObject.openSortMenu();
        productsPageObject.selectSortType(sortType);
    }

    @Then("^Product successfully sorted by \"([^\"]*)\"$")
    public void productSuccessfullySortedBy(String sortType) {
        productsPageObject.verifySortSuccess(sortType);
    }

    @Given("^User already logged in$")
    public void userAlreadyLoggedIn() {
    }

    @When("^User order \"([^\"]*)\" product \"([^\"]*)\" with Color \"([^\"]*)\"$")
    public void userOrderProductWithColor(int quantity, String product, String color) {
        productsPageObject.orderProduct(quantity, product, color);
    }

    @Then("^Open cart menu$")
    public void orderAddedToCart() {
        productsPageObject.openCartMenu();
    }

    @Then("^User verify order in cart$")
    public void userVerifyOrderInCart() {
        productsPageObject.openCartMenu();
        productsPageObject.verifyOrderInCart();
    }

    @When("^User proceed to checkout$")
    public void userProceedToCheckout() {
        productsPageObject.proceedCheckout();
        productsPageObject.submitLogin("bod@example.com", "10203040");
    }

    @And("^User submit shipping address$")
    public void userSubmitShippingAddress() {
        productsPageObject.verifyShippingAddressFormPageDisplayed();
        productsPageObject.submitShippingAddress("Test Name", "Jalan Slipi", "Jaya 12", "Jakarta", "Jakarta Barat", "11410", "Indonesia");
    }

    @And("^User submit payment method$")
    public void userSubmitPaymentMethod() {
        productsPageObject.verifyPaymentMethodFormPageDisplayed();
        productsPageObject.submitPaymentMethod("Test Card", "1234432156788765", "0530", "123");
    }

    @Then("^User shown review order page$")
    public void userShownReviewOrderPage() {
        productsPageObject.verifyReviewOrderPageDisplayed();
        productsPageObject.verifyReviewOrderCorrect();
    }

    @When("^User submit place order$")
    public void userSubmitPlaceOrder() {
        productsPageObject.submitPlaceOrder();
    }

    @Then("^User successfully checkout and order$")
    public void userSuccessfullyCheckoutAndOrder() {
        productsPageObject.verifyCheckoutSuccessPageDisplayed();
        productsPageObject.clickContinueShopping();
    }

    @When("^User submit shipping address with empty \"([^\"]*)\"$")
    public void userSubmitShippingAddressWithEmpty(String field) {
        switch (field) {
            case "Full Name":
                productsPageObject.submitShippingAddress("", "Jalan Slipi", "Jaya 12", "Jakarta", "Jakarta Barat", "abcde", "Indonesia");
                break;
            case "Address Line 1":
                productsPageObject.submitShippingAddress("Full Name", "", "Jaya 12", "Jakarta", "Jakarta Barat", "11410", "Indonesia");
                break;
            case "City":
                productsPageObject.submitShippingAddress("Full Name", "Jalan Slipi", "Jaya 12", "", "Jakarta Barat", "11410", "Indonesia");
                break;
            case "Zip Code":
                productsPageObject.submitShippingAddress("Full Name", "Jalan Slipi", "Jaya 12", "Jakarta", "Jakarta Barat", "", "Indonesia");
                break;
            case "Country":
                productsPageObject.submitShippingAddress("Full Name", "Jalan Slipi", "Jaya 12", "Jakarta", "Jakarta Barat", "11410", "");
                break;
            default:
                throw new IllegalArgumentException("Field not exists: " + field);
        }
    }

    @Then("^User shown error \"([^\"]*)\" in shipping address screen$")
    public void userShownErrorInShippingAddressScreen(String message) {
        productsPageObject.verifyShippingFormInputError(message);
    }

    @When("^User remove item from cart$")
    public void userRemoveItemFromCart() {
        productsPageObject.removeItemCart();
    }

    @Then("^Item successfully removed$")
    public void itemSuccessfullyRemoved() {
        productsPageObject.verifyCartIsEmpty();
    }

    @When("^User submit payment method with empty \"([^\"]*)\"$")
    public void userSubmitPaymentMethodWithEmpty(String field) {
        switch (field) {
            case "Full Name":
                productsPageObject.submitPaymentMethod("", "1234432156788765", "0530", "123");
                break;
            case "Card Number":
                productsPageObject.submitPaymentMethod("Test Card", "", "0530", "123");
                break;
            case "Expiration Date":
                productsPageObject.submitPaymentMethod("Test Card", "1234432156788765", "", "123");
                break;
            case "Security Code":
                productsPageObject.submitPaymentMethod("Test Card", "1234432156788765", "0530", "");
                break;
            default:
                throw new IllegalArgumentException("Field not exists: " + field);
        }
    }

    @Then("^User shown error \"([^\"]*)\" in \"([^\"]*)\" field in payment method screen$")
    public void userShownErrorInFieldInPaymentMethodScreen(String message, String field) {
        productsPageObject.verifyPaymentFormInputError(message, field);
    }

    @Then("^User unable to add product into cart$")
    public void userUnableToAddProductIntoCart() {
        productsPageObject.verifyAddToCartDisabled();
    }
}
