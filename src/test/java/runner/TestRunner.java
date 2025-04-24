package runner;

import java.io.File;

import org.testng.annotations.*;

import com.cucumber.listener.Reporter;
import utils.DriverFactory;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import io.appium.java_client.AppiumDriver;

@CucumberOptions(
        features = "src/test/resources/features",
        glue = {"steps"},
        plugin = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"})

public class TestRunner{
    private TestNGCucumberRunner testNGCucumberRunner;
    DriverFactory appiumDriverFactory = DriverFactory.getInstanceOfAppiumDriverFactory();
    AppiumDriver driver = appiumDriverFactory.getDriver();

        @BeforeClass(alwaysRun = true)
        public void setUpClass() throws Exception {
                testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
        }

        @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
        public void feature(CucumberFeatureWrapper cucumberFeature) {
                testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
        }

        @DataProvider
        public Object[][] features() {
                return testNGCucumberRunner.provideFeatures();
        }


        @AfterClass(alwaysRun = true)
        public void tearDownClass() throws Exception {
            driver.quit();
            Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));
            testNGCucumberRunner.finish();
        }

}