package page;

import io.appium.java_client.AppiumDriver;
import org.openqa.selenium.By;
import org.testng.Assert;
import utils.CommonMethod;
import utils.DriverFactory;

public class ProductsPageObject {
    AppiumDriver driver;
    DriverFactory driverFactory = DriverFactory.getInstanceOfAppiumDriverFactory();
    CommonMethod commonMethod;
    int productQuantity;
    float totalPriceF, finalPriceF;
    String productName, productColor, totalPrice, reviewFullName, reviewAddress1, reviewCity, reviewCountry;
    String reviewCardFullName, reviewCardNumber, reviewExpirationDate, finalPrice;

    /** Page Objects **/
    // Headers
    private static final By header = By.id("com.saucelabs.mydemoapp.android:id/header");

    // Buttons
    private static final By btn_addquantity = By.id("com.saucelabs.mydemoapp.android:id/plusIV");
    private static final By btn_addtocart = By.id("com.saucelabs.mydemoapp.android:id/cartBt");
    private static final By btn_burgermenu = By.id("com.saucelabs.mydemoapp.android:id/menuIV");
    private static final By btn_cartmenu = By.id("com.saucelabs.mydemoapp.android:id/cartIV");
    private static final By btn_closereview = By.id("com.saucelabs.mydemoapp.android:id/closeBt");
    private static final By btn_confirmlogout = By.id("android:id/button1");
    private static final By btn_continueshopping = By.id("com.saucelabs.mydemoapp.android:id/shoopingBt");
    private static final By btn_login = By.id("com.saucelabs.mydemoapp.android:id/loginBtn");
    private static final By btn_removeitemcart = By.id("com.saucelabs.mydemoapp.android:id/removeBt");
    private static final By btn_removequantity = By.id("com.saucelabs.mydemoapp.android:id/minusIV");
    private static final By btn_sortmenu = By.id("com.saucelabs.mydemoapp.android:id/sortIV");
    private static final By btn_submitform = By.id("com.saucelabs.mydemoapp.android:id/paymentBtn");

    // Text Boxes
    private static final By txtbox_address1 = By.id("com.saucelabs.mydemoapp.android:id/address1ET");
    private static final By txtbox_address2 = By.id("com.saucelabs.mydemoapp.android:id/address2ET");
    private static final By txtbox_cardexpirationdate = By.id("com.saucelabs.mydemoapp.android:id/expirationDateET");
    private static final By txtbox_cardfullname = By.id("com.saucelabs.mydemoapp.android:id/nameET");
    private static final By txtbox_cardnumber = By.id("com.saucelabs.mydemoapp.android:id/cardNumberET");
    private static final By txtbox_cardsecuritycode = By.id("com.saucelabs.mydemoapp.android:id/securityCodeET");
    private static final By txtbox_city = By.id("com.saucelabs.mydemoapp.android:id/cityET");
    private static final By txtbox_country = By.id("com.saucelabs.mydemoapp.android:id/countryET");
    private static final By txtbox_fullname = By.id("com.saucelabs.mydemoapp.android:id/fullNameET");
    private static final By txtbox_password = By.id("com.saucelabs.mydemoapp.android:id/passwordET");
    private static final By txtbox_state = By.id("com.saucelabs.mydemoapp.android:id/stateET");
    private static final By txtbox_username = By.id("com.saucelabs.mydemoapp.android:id/nameET");
    private static final By txtbox_zipcode = By.id("com.saucelabs.mydemoapp.android:id/zipET");

    // Labels (TextViews)
    private static final By lbl_cartproductname = By.id("com.saucelabs.mydemoapp.android:id/titleTV");
    private static final By lbl_carttotalprice = By.id("com.saucelabs.mydemoapp.android:id/totalPriceTV");
    private static final By lbl_checkoutcomplete = By.id("com.saucelabs.mydemoapp.android:id/completeTV");
    private static final By lbl_enterpaymentmethod = By.id("com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV");
    private static final By lbl_entershippingaddress = By.id("com.saucelabs.mydemoapp.android:id/enterShippingAddressTV");
    private static final By lbl_logoutalert = By.id("com.saucelabs.mydemoapp.android:id/alertTitle");
    private static final By lbl_noitemscart = By.id("com.saucelabs.mydemoapp.android:id/noItemTitleTV");
    private static final By lbl_paymentexpirationdateerror = By.id("com.saucelabs.mydemoapp.android:id/expirationDateErrorTV");
    private static final By lbl_paymentfullnameerror = By.id("com.saucelabs.mydemoapp.android:id/nameErrorTV");
    private static final By lbl_paymentsecuritycodeerror = By.id("com.saucelabs.mydemoapp.android:id/securityCodeErrorTV");
    private static final By lbl_productprice = By.id("com.saucelabs.mydemoapp.android:id/priceTV");
    private static final By lbl_producttitle = By.id("com.saucelabs.mydemoapp.android:id/productTV");
    private static final By lbl_reviewaddress = By.id("com.saucelabs.mydemoapp.android:id/addressTV");
    private static final By lbl_reviewcardexpiration = By.id("com.saucelabs.mydemoapp.android:id/expirationDateTV");
    private static final By lbl_reviewcardname = By.id("com.saucelabs.mydemoapp.android:id/cardHolderTV");
    private static final By lbl_reviewcardnumber = By.id("com.saucelabs.mydemoapp.android:id/cardNumberTV");
    private static final By lbl_reviewcity = By.id("com.saucelabs.mydemoapp.android:id/cityTV");
    private static final By lbl_reviewcountry = By.id("com.saucelabs.mydemoapp.android:id/countryTV");
    private static final By lbl_reviewfullname = By.id("com.saucelabs.mydemoapp.android:id/fullNameTV");
    private static final By lbl_revieworder = By.xpath("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/enterShippingAddressTV' and @text='Review your order']");
    private static final By lbl_reviewtotalamount = By.id("com.saucelabs.mydemoapp.android:id/totalAmountTV");
    private static final By lbl_shippingfee = By.id("com.saucelabs.mydemoapp.android:id/amountTV");
    private static final By lbl_shippingfullnameerror = By.id("com.saucelabs.mydemoapp.android:id/fullNameErrorTV");
    private static final By lbl_shippingaddresserror = By.id("com.saucelabs.mydemoapp.android:id/address1ErrorTV");
    private static final By lbl_shippingcityerror = By.id("com.saucelabs.mydemoapp.android:id/cityErrorTV");
    private static final By lbl_shippingzipcodeerror = By.id("com.saucelabs.mydemoapp.android:id/zipErrorTV");
    private static final By lbl_shippingcountryerror = By.id("com.saucelabs.mydemoapp.android:id/countryErrorTV");
    private static final By lbl_successreview = By.id("com.saucelabs.mydemoapp.android:id/sortTV");

    // Menu Items
    private static final By txtview_menu_catalog = By.xpath("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemTV' and @text='Catalog']");
    private static final By txtview_menu_logout = By.xpath("//android.widget.TextView[@content-desc='Logout Menu Item']");

    // Icon
    private static final By icon_cardnumbererror = By.id("com.saucelabs.mydemoapp.android:id/cardNumberErrorIV");

    public void launchApp() {
        driver = driverFactory.getDriver();
        commonMethod = new CommonMethod(driver);
        Assert.assertTrue(commonMethod.verifyElementExists(header), "Unable to launch application!");
    }

    public void clickContinueShopping() {
        driver.findElement(btn_continueshopping).click();
        commonMethod.waitFor(2000);
        driver.findElement(btn_burgermenu).click();
        driver.findElement(txtview_menu_logout).click();
        Assert.assertTrue(commonMethod.verifyElementExists(lbl_logoutalert), "Logout alert not displayed");
        driver.findElement(btn_confirmlogout).click();
    }

    public void openCatalogMenu() {
        driver.findElement(btn_burgermenu).click();
        driver.findElement(txtview_menu_catalog).click();
    }

    public void openSortMenu() {
        driver.findElement(btn_sortmenu).click();
    }

    public void openCartMenu() {
        driver.findElement(btn_cartmenu).click();
    }

    public void selectSortType(String sortType) {
        driver.findElement(By.xpath("//android.widget.TextView[@text='" + sortType + "']")).click();
    }

    public void orderProduct(int quantity, String product, String color) {
        productQuantity = quantity;
        productName = product;
        productColor = color;

        // Get and parse product price
        String priceText = commonMethod.getElementText(lbl_productprice).replace("$", "");
        float price = Float.parseFloat(priceText);
        totalPriceF = price * quantity;
        totalPrice = String.valueOf(totalPriceF);

        // Select product
        driver.findElement(By.xpath("//android.widget.TextView[@text='" + product + "']/preceding-sibling::android.widget.ImageView[@content-desc='Product Image']")).click();

        // Scroll and add quantity or remove
        commonMethod.swipeScreen(500, 800, 500, 100);
        if (quantity == 0) {
            driver.findElement(btn_removequantity).click();
        } else {
            for (int i = 1; i < quantity; i++) {
                driver.findElement(btn_addquantity).click();
            }
        }

        // Select color and add to cart
        driver.findElement(By.xpath("//android.widget.ImageView[@content-desc='" + color + " color']")).click();
        driver.findElement(btn_addtocart).click();
    }

    public void removeItemCart() {
        driver.findElement(btn_removeitemcart).click();
    }

    public void submitReview(String product, int stars) {
        driver.findElement(By.xpath("//android.widget.TextView[@content-desc='Product Title' and @text='" + product + "']/following-sibling::android.view.ViewGroup//android.widget.ImageView[@resource-id='com.saucelabs.mydemoapp.android:id/start" + stars + "IV']")).click();
    }

    public void submitLogin(String username, String password) {
        if (commonMethod.verifyElementExists(txtbox_username)) {
            commonMethod.enterValueInTextBox(username, txtbox_username);
            commonMethod.enterValueInTextBox(password, txtbox_password);
            driver.findElement(btn_login).click();
        }
    }

    public void submitShippingAddress(String fullName, String address1, String address2, String city, String state, String zipcode, String country) {
        // Enter address details
        commonMethod.enterValueInTextBox(fullName, txtbox_fullname);
        commonMethod.enterValueInTextBox(address1, txtbox_address1);
        commonMethod.enterValueInTextBox(address2, txtbox_address2);

        // Swipe to reveal remaining fields
        commonMethod.swipeScreen(1400, 1100, 1400, 100);

        // Continue entering details
        commonMethod.enterValueInTextBox(city, txtbox_city);
        commonMethod.enterValueInTextBox(state, txtbox_state);
        commonMethod.enterValueInTextBox(zipcode, txtbox_zipcode);
        commonMethod.enterValueInTextBox(country, txtbox_country);

        // Store values for review page
        reviewFullName = fullName;
        reviewAddress1 = address1;
        reviewCity = city + ", " + state;
        reviewCountry = country + ", " + zipcode;

        // Submit the form
        driver.findElement(btn_submitform).click();
    }

    public void submitPaymentMethod(String fullName, String cardNumber, String expirationDate, String securityCode) {
        // Enter payment details
        commonMethod.enterValueInTextBox(fullName, txtbox_cardfullname);
        commonMethod.enterValueInTextBox(cardNumber, txtbox_cardnumber);
        commonMethod.enterValueInTextBox(expirationDate, txtbox_cardexpirationdate);
        expirationDate = commonMethod.getElementText(txtbox_cardexpirationdate);
        commonMethod.enterValueInTextBox(securityCode, txtbox_cardsecuritycode);

        // Store values for review page
        reviewCardFullName = fullName;
        reviewCardNumber = cardNumber;
        reviewExpirationDate = "Exp: " + expirationDate;

        // Submit the form
        driver.findElement(btn_submitform).click();
    }

    public void submitPlaceOrder() {
        driver.findElement(btn_submitform).click();
    }

    public void proceedCheckout() {
        Assert.assertTrue(commonMethod.verifyElementExists(btn_addtocart), "User not in checkout page");
        driver.findElement(btn_addtocart).click();
    }

    public void verifyCatalogPageDisplayed() {
        Assert.assertTrue(commonMethod.verifyElementExists(lbl_producttitle), "User not in catalog page");
    }

    public void verifyCheckoutSuccessPageDisplayed() {
        Assert.assertTrue(commonMethod.verifyElementExists(lbl_checkoutcomplete), "User failed to checkout order");
    }

    public void verifyShippingAddressFormPageDisplayed() {
        Assert.assertTrue(commonMethod.verifyElementExists(lbl_entershippingaddress), "User not in shipping address form page");
    }

    public void verifyPaymentMethodFormPageDisplayed() {
        Assert.assertTrue(commonMethod.verifyElementExists(lbl_enterpaymentmethod), "User not in payment method form page");
    }

    public void verifyReviewOrderPageDisplayed() {
        Assert.assertTrue(commonMethod.verifyElementExists(lbl_revieworder), "User not in review order page");
    }

    public void verifyCartIsEmpty() {
        Assert.assertTrue(commonMethod.verifyElementExists(lbl_noitemscart), "Cart is not empty");
    }

    public void verifyOrderInCart() {
        boolean quantityMatches = commonMethod.verifyElementExists(
                By.xpath("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemsTV' and @text='" + productQuantity + " Items']")
        );
        Assert.assertTrue(quantityMatches, "Product quantity not match");
        Assert.assertEquals(commonMethod.getElementText(lbl_cartproductname), productName, "Product name not match");
        Assert.assertEquals(commonMethod.getElementText(lbl_carttotalprice), "$ " + totalPrice, "Product price not match");
    }

    public void verifyAddToCartDisabled() {
        Assert.assertFalse(driver.findElement(btn_addtocart).isEnabled(), "Button is enabled");
    }

    public void verifyReviewOrderCorrect() {
        Assert.assertEquals(commonMethod.getElementText(lbl_cartproductname), productName, "Product name not match");
        commonMethod.swipeScreen(800, 1200, 800, 100);
        Assert.assertEquals(commonMethod.getElementText(lbl_reviewfullname), reviewFullName, "Full name not match");
        Assert.assertEquals(commonMethod.getElementText(lbl_reviewaddress), reviewAddress1, "Address not match");
        Assert.assertEquals(commonMethod.getElementText(lbl_reviewcity), reviewCity, "City not match");
        Assert.assertEquals(commonMethod.getElementText(lbl_reviewcountry), reviewCountry, "Country not match");
        Assert.assertEquals(commonMethod.getElementText(lbl_reviewcardname), reviewCardFullName, "Card name not match");
        Assert.assertEquals(commonMethod.getElementText(lbl_reviewcardnumber), reviewCardNumber, "Card number not match");
        Assert.assertEquals(commonMethod.getElementText(lbl_reviewcardexpiration), reviewExpirationDate, "Card expiration date not match");

        boolean quantityMatches = commonMethod.verifyElementExists(
                By.xpath("//android.widget.TextView[@resource-id='com.saucelabs.mydemoapp.android:id/itemNumberTV' and @text='" + productQuantity + " Items']")
        );
        Assert.assertTrue(quantityMatches, "Product quantity not match");

        commonMethod.swipeScreen(800, 1200, 800, 100);

        String shippingFeeText = commonMethod.getElementText(lbl_shippingfee).replace("$", "");
        float shippingFee = Float.parseFloat(shippingFeeText);
        finalPriceF = totalPriceF + shippingFee;
        finalPrice = String.valueOf(finalPriceF);

        Assert.assertEquals(commonMethod.getElementText(lbl_reviewtotalamount), "$ " + finalPrice, "Total price not match");
    }

    public void verifyReviewSucessMessageDisplayed() {
        Assert.assertTrue(commonMethod.verifyElementExists(lbl_successreview), "User failed to review");
        driver.findElement(btn_closereview).click();
    }

    public void verifySortSuccess(String sortType) {
        String product1 = commonMethod.getElementText(By.xpath("(//android.widget.TextView[@content-desc='Product Title'])[1]"));
        String product2 = commonMethod.getElementText(By.xpath("(//android.widget.TextView[@content-desc='Product Title'])[2]"));

        String price1 = commonMethod.getElementText(By.xpath("(//android.widget.TextView[@content-desc='Product Price'])[1]")).replaceAll("\\D+", "");
        String price2 = commonMethod.getElementText(By.xpath("(//android.widget.TextView[@content-desc='Product Price'])[2]")).replaceAll("\\D+", "");
        int value1 = Integer.parseInt(price1);
        int value2 = Integer.parseInt(price2);

        boolean isSorted;

        switch (sortType) {
            case "Name - Ascending":
                isSorted = product1.compareToIgnoreCase(product2) <= 0;
                break;
            case "Name - Descending":
                isSorted = product1.compareToIgnoreCase(product2) >= 0;
                break;
            case "Price - Ascending":
                isSorted = value1 <= value2;
                break;
            case "Price - Descending":
                isSorted = value1 >= value2;
                break;
            default:
                throw new IllegalArgumentException("Invalid sort type: " + sortType);
        }
        Assert.assertTrue(isSorted, "Sort Failed for type: " + sortType);
    }

    public void verifyShippingFormInputError(String message) {
        switch (message) {
            case "Please provide your full name.":
                Assert.assertEquals(commonMethod.getElementText(lbl_shippingfullnameerror), message, "Error not match");
                break;
            case "Please provide your address.":
                Assert.assertEquals(commonMethod.getElementText(lbl_shippingaddresserror), message, "Error not match");
                break;
            case "Please provide your city.":
                Assert.assertEquals(commonMethod.getElementText(lbl_shippingcityerror), message, "Error not match");
                break;
            case "Please provide your zip":
                Assert.assertEquals(commonMethod.getElementText(lbl_shippingzipcodeerror), message, "Error not match");
                break;
            case "Please provide you country.":
                Assert.assertEquals(commonMethod.getElementText(lbl_shippingcountryerror), message, "Error not match");
                break;
            default:
                throw new IllegalArgumentException("Invalid error message: " + message);
        }
        Assert.assertTrue(commonMethod.verifyElementNotExists(lbl_enterpaymentmethod), "User successfully open payment method form page");
    }

    public void verifyPaymentFormInputError(String message, String field) {
        switch (field) {
            case "Full Name":
                Assert.assertEquals(commonMethod.getElementText(lbl_paymentfullnameerror), message, "Error not match");
                break;
            case "Card Number":
                Assert.assertTrue(commonMethod.verifyElementExists(icon_cardnumbererror));
                break;
            case "Expiration Date":
                Assert.assertEquals(commonMethod.getElementText(lbl_paymentexpirationdateerror), message, "Error not match");
                break;
            case "Security Code":
                Assert.assertEquals(commonMethod.getElementText(lbl_paymentsecuritycodeerror), message, "Error not match");
                break;
        }
        Assert.assertTrue(commonMethod.verifyElementNotExists(lbl_revieworder), "User successfully open review order page");
    }
}
