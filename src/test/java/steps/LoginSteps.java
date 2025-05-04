package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.Hooks;
import page.LoginPage;

public class LoginSteps {

    LoginPage loginPage = new LoginPage(Hooks.driver);

    @Given("^User open login page$")
    public void userOpenLoginPage() {
        loginPage.launchApp();
        loginPage.openLoginMenu();
        loginPage.verifyLoginPageDisplayed();
    }

    @When("^User login with username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void userSubmitValidAnd(String username, String password) {
        if (username.equals("NULL")) {
            username = "";
        } else if (password.equals("NULL")) {
            password = "";
        }
        loginPage.submitLogin(username, password);
    }

    @When("^User logout account$")
    public void userLogoutAccount() {
        loginPage.submitLogout();
    }

    @Then("^User successfully login$")
    public void userSuccessfullyLogin() {
        loginPage.verifyLoginSuccess();
    }

    @Then("^User failed to login$")
    public void userFailedToLogin() {
        loginPage.verifyLoginPageDisplayed();
    }

    @Then("^User shown error \"([^\"]*)\"$")
    public void userShownError(String message) {
        switch (message) {
            case "Username is required":
                loginPage.verifyUsernameErrorDisplayed(message);
                break;
            case "Enter Password":
                loginPage.verifyPasswordErrorDisplayed(message);
                break;
            case "Account Locked":
                loginPage.verifyLockedErrorMessageDisplayed();
                break;
            default:
                throw new IllegalArgumentException("Unexpected error message: " + message);
        }
    }

    @Then("^User successfully logout$")
    public void userSuccessfullyLogout() {
        loginPage.verifyLoginPageDisplayed();
    }
}
