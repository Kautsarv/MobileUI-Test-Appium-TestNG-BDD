package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.Hooks;
import page.ProductPage;

public class ProductSteps {
    ProductPage productPage = new ProductPage(Hooks.driver);

    @Given("^User open catalog page$")
    public void userOpenCatalogPage() {
        productPage.launchApp();
        productPage.openCatalogMenu();
        productPage.verifyCatalogPageDisplayed();
    }

    @When("^User submit review \"([^\"]*)\" with \"([^\"]*)\" stars$")
    public void userSubmitReviewWithStars(String product, int stars) {
        productPage.submitReview(product, stars);
    }

    @Then("^User successfully submit product review$")
    public void userSuccessfullySubmitProductReview() {
        productPage.verifyReviewSucessMessageDisplayed();
    }

    @When("^User sort product by \"([^\"]*)\"$")
    public void userSortProductBy(String sortType) {
        productPage.openSortMenu();
        productPage.selectSortType(sortType);
    }

    @Then("^Product successfully sorted by \"([^\"]*)\"$")
    public void productSuccessfullySortedBy(String sortType) {
        productPage.verifySortSuccess(sortType);
    }

    @Given("^User already logged in$")
    public void userAlreadyLoggedIn() {
    }

    @When("^User order \"([^\"]*)\" product \"([^\"]*)\" with Color \"([^\"]*)\"$")
    public void userOrderProductWithColor(int quantity, String product, String color) {
        productPage.orderProduct(quantity, product, color);
        productPage.openCatalogMenu();
        productPage.verifyCatalogPageDisplayed();
    }

    @Then("^Open cart menu$")
    public void orderAddedToCart() {
        productPage.openCartMenu();
    }

    @Then("^User verify order in cart$")
    public void userVerifyOrderInCart() {
        productPage.openCartMenu();
        productPage.verifyOrderInCart();
    }

    @When("^User proceed to checkout$")
    public void userProceedToCheckout() {
        productPage.proceedCheckout();
    }

    @And("^User submit shipping address$")
    public void userSubmitShippingAddress() {
        productPage.verifyShippingAddressFormPageDisplayed();
        productPage.submitShippingAddress("Test Name", "Jalan Slipi", "Jaya 12", "Jakarta", "Jakarta Barat", "11410", "Indonesia");
    }

    @And("^User submit payment method$")
    public void userSubmitPaymentMethod() {
        productPage.verifyPaymentMethodFormPageDisplayed();
        productPage.submitPaymentMethod("Test Card", "1234432156788765", "0530", "123");
    }

    @Then("^User shown review order page$")
    public void userShownReviewOrderPage() {
        productPage.verifyReviewOrderPageDisplayed();
        productPage.verifyReviewOrderCorrect();
    }

    @When("^User submit place order$")
    public void userSubmitPlaceOrder() {
        productPage.submitPlaceOrder();
    }

    @Then("^User successfully checkout and order$")
    public void userSuccessfullyCheckoutAndOrder() {
        productPage.verifyCheckoutSuccessPageDisplayed();
        productPage.clickContinueShopping();
    }

    @When("^User submit shipping address with empty \"([^\"]*)\"$")
    public void userSubmitShippingAddressWithEmpty(String field) {
        switch (field) {
            case "Full Name":
                productPage.submitShippingAddress("", "Jalan Slipi", "Jaya 12", "Jakarta", "Jakarta Barat", "abcde", "Indonesia");
                break;
            case "Address Line 1":
                productPage.submitShippingAddress("Full Name", "", "Jaya 12", "Jakarta", "Jakarta Barat", "11410", "Indonesia");
                break;
            case "City":
                productPage.submitShippingAddress("Full Name", "Jalan Slipi", "Jaya 12", "", "Jakarta Barat", "11410", "Indonesia");
                break;
            case "Zip Code":
                productPage.submitShippingAddress("Full Name", "Jalan Slipi", "Jaya 12", "Jakarta", "Jakarta Barat", "", "Indonesia");
                break;
            case "Country":
                productPage.submitShippingAddress("Full Name", "Jalan Slipi", "Jaya 12", "Jakarta", "Jakarta Barat", "11410", "");
                break;
            default:
                throw new IllegalArgumentException("Field not exists: " + field);
        }
    }

    @Then("^User shown error \"([^\"]*)\" in shipping address screen$")
    public void userShownErrorInShippingAddressScreen(String message) {
        productPage.verifyShippingFormInputError(message);
    }

    @When("^User remove item from cart$")
    public void userRemoveItemFromCart() {
        productPage.removeItemCart();
    }

    @Then("^Item successfully removed$")
    public void itemSuccessfullyRemoved() {
        productPage.verifyCartIsEmpty();
    }

    @When("^User submit payment method with empty \"([^\"]*)\"$")
    public void userSubmitPaymentMethodWithEmpty(String field) {
        switch (field) {
            case "Full Name":
                productPage.submitPaymentMethod("", "1234432156788765", "0530", "123");
                break;
            case "Card Number":
                productPage.submitPaymentMethod("Test Card", "", "0530", "123");
                break;
            case "Expiration Date":
                productPage.submitPaymentMethod("Test Card", "1234432156788765", "", "123");
                break;
            case "Security Code":
                productPage.submitPaymentMethod("Test Card", "1234432156788765", "0530", "");
                break;
            default:
                throw new IllegalArgumentException("Field not exists: " + field);
        }
    }

    @Then("^User shown error \"([^\"]*)\" in \"([^\"]*)\" field in payment method screen$")
    public void userShownErrorInFieldInPaymentMethodScreen(String message, String field) {
        productPage.verifyPaymentFormInputError(message, field);
    }

    @Then("^User unable to add product into cart$")
    public void userUnableToAddProductIntoCart() {
        productPage.verifyAddToCartDisabled();
    }
}
