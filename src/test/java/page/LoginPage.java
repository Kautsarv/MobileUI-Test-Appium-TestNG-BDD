package page;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import org.openqa.selenium.By;
import org.testng.Assert;

public class LoginPage extends BasePage{
    public LoginPage(AppiumDriver<MobileElement> driver) {
        super(driver);
    }

    /** Page Objects **/
    // Headers
    private static final By header = By.id("com.saucelabs.mydemoapp.android:id/header");

    // Buttons
    private static final By btn_burgermenu = By.id("com.saucelabs.mydemoapp.android:id/menuIV");
    private static final By btn_confirmlogout = By.id("android:id/button1");
    private static final By btn_login = By.id("com.saucelabs.mydemoapp.android:id/loginBtn");

    // Text Boxes
    private static final By txtbox_username = By.id("com.saucelabs.mydemoapp.android:id/nameET");
    private static final By txtbox_password = By.id("com.saucelabs.mydemoapp.android:id/passwordET");

    // Labels (TextViews)
    private static final By lbl_logintitle = By.id("com.saucelabs.mydemoapp.android:id/loginTV");
    private static final By lbl_logoutalert = By.id("com.saucelabs.mydemoapp.android:id/alertTitle");
    private static final By lbl_passworderror = By.id("com.saucelabs.mydemoapp.android:id/passwordErrorTV");
    private static final By lbl_usernameerror = By.id("com.saucelabs.mydemoapp.android:id/nameErrorTV");

    // Menu Items
    private static final By txtview_menu_login = By.xpath("//android.widget.TextView[@content-desc='Login Menu Item']");
    private static final By txtview_menu_logout = By.xpath("//android.widget.TextView[@content-desc='Logout Menu Item']");

    public void launchApp() {
        Assert.assertTrue(verifyElementExists(header), "Unable to launch application!");
    }

    public void openLoginMenu() {
        driver.findElement(btn_burgermenu).click();
        driver.findElement(txtview_menu_login).click();
    }

    public void submitLogout() {
        driver.findElement(btn_burgermenu).click();
        driver.findElement(txtview_menu_logout).click();
        Assert.assertTrue(verifyElementExists(lbl_logoutalert), "Logout alert not displayed");
        driver.findElement(btn_confirmlogout).click();
    }

    public void submitLogin(String username, String password) {
        enterValueInTextBox(username, txtbox_username);
        enterValueInTextBox(password, txtbox_password);
        driver.findElement(btn_login).click();
    }

    public void verifyLoginSuccess() {
        waitFor(1000);
        Assert.assertTrue(verifyElementNotExists(lbl_logintitle), "User failed to login");
    }

    public void verifyLoginPageDisplayed() {
        Assert.assertTrue(verifyElementExists(lbl_logintitle), "User not in login page");
    }

    public void verifyLockedErrorMessageDisplayed() {
        Assert.assertTrue(verifyElementExists(lbl_passworderror) && getElementText(lbl_passworderror).equals("Sorry this user has been locked out."), "User successfully login and navigated back to main page");
    }

    public void verifyUsernameErrorDisplayed(String message) {
        Assert.assertTrue(verifyElementExists(lbl_usernameerror) && getElementText(lbl_usernameerror).equals(message), "Username is required error message is not displayed");
    }

    public void verifyPasswordErrorDisplayed(String message) {
        Assert.assertTrue(verifyElementExists(lbl_passworderror) && getElementText(lbl_passworderror).equals(message), "Password is required error message is not displayed");
    }
}
