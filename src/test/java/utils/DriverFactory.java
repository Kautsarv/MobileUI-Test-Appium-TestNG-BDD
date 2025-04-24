package utils;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.AppiumDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class DriverFactory {

    private static DriverFactory instance = null;
    private AppiumDriver<AndroidElement> driver;

    private DriverFactory(){
        File app= new File(System.getProperty("user.dir")+"/src/test/resources/apk/mda-2.2.0-25.apk");
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("platformVersion", "11");
        capabilities.setCapability("deviceName", "Pixel-XL");
        capabilities.setCapability("automationName", "UiAutomator2");
        capabilities.setCapability("resetKeyboard", "true");
        capabilities.setCapability("unicodeKeyboard", "true");
        capabilities.setCapability("app", app.getAbsolutePath());
        try {
            driver = new AndroidDriver<AndroidElement>(new URL("http://127.0.0.1:4723/wd/hub/"), capabilities);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        driver.manage().timeouts().implicitlyWait(6000, TimeUnit.MILLISECONDS);
    }

    public static DriverFactory getInstanceOfAppiumDriverFactory() {
        if (instance == null)
            instance = new DriverFactory();
        return instance;
    }

    // To get driver
    public AppiumDriver<AndroidElement> getDriver() {
        return driver;
    }
}
