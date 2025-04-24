package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPageObject;

public class LoginStepDef {
    LoginPageObject loginPageObject = new LoginPageObject();

    @Given("^User open login page$")
    public void userOpenLoginPage() {
        loginPageObject.launchApp();
        loginPageObject.openLoginMenu();
        loginPageObject.verifyLoginPageDisplayed();
    }

    @When("^User login with username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void userSubmitValidAnd(String username, String password) {
        if (username.equals("NULL")) {
            username = "";
        } else if (password.equals("NULL")) {
            password = "";
        }
        loginPageObject.submitLogin(username, password);
    }

    @When("^User logout account$")
    public void userLogoutAccount() {
        loginPageObject.submitLogout();
    }

    @Then("^User successfully login$")
    public void userSuccessfullyLogin() {
        loginPageObject.verifyLoginSuccess();
    }

    @Then("^User failed to login$")
    public void userFailedToLogin() {
        loginPageObject.verifyLoginPageDisplayed();
    }

    @Then("^User shown error \"([^\"]*)\"$")
    public void userShownError(String message) {
        switch (message) {
            case "Username is required":
                loginPageObject.verifyUsernameErrorDisplayed(message);
                break;
            case "Enter Password":
                loginPageObject.verifyPasswordErrorDisplayed(message);
                break;
            case "Account Locked":
                loginPageObject.verifyLockedErrorMessageDisplayed();
                break;
            default:
                throw new IllegalArgumentException("Unexpected error message: " + message);
        }
    }

    @Then("^User successfully logout$")
    public void userSuccessfullyLogout() {
        loginPageObject.verifyLoginPageDisplayed();
    }
}
