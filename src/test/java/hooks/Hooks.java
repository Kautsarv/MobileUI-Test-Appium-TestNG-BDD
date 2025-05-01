package hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class Hooks {
    public static AppiumDriver<MobileElement> driver;

    @Before
    public void setUp() {
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
            driver = new AndroidDriver<>(new URL("http://127.0.0.1:4723/wd/hub/"), capabilities);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
