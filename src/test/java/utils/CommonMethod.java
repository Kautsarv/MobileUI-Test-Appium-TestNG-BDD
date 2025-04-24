package utils;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.offset.PointOption;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;

public class CommonMethod {
    private AppiumDriver driver;

    public CommonMethod(AppiumDriver driver) {
        this.driver = driver;
    }

    public void waitFor(long milliSeconds) {
        try {
            Thread.sleep(milliSeconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void swipeScreen(int startX, int startY, int endX, int endY){
        try {
            TouchAction action = new TouchAction(driver);
            PointOption pointStart = PointOption.point(startX,startY);
            PointOption pointEnd = PointOption.point(endX,endY);
            action.press(pointStart).moveTo(pointEnd).release().perform();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void captureScreen(){
        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(scrFile, new File("Screenshot-"+LocalDateTime.now()+".jpg"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public Boolean verifyElementExists(By by) {
        try {
            if (driver.findElements(by).size() == 0) {
                return false;
            } else {
                return true;
            }
        }catch (Exception ex){
            ex.printStackTrace();
            return false;
        }
    }

    public Boolean verifyElementNotExists(By by) {
        try {
            if (driver.findElements(by).size() == 0) {
                return true;
            } else {
                return false;
            }
        }catch (Exception ex){
            ex.printStackTrace();
            return false;
        }
    }

    public boolean enterValueInTextBox(String text, By by) {
        boolean flag = false;
        try {
            if (driver.findElement(by).isDisplayed()) {
                driver.findElement(by).click();
                driver.findElement(by).clear();
                driver.findElement(by).sendKeys(text);
                flag = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

    public String getElementText(By by) {
        if (driver.findElement(by).isDisplayed()) {
            return driver.findElement(by).getText();
        } else {
            throw new ElementNotVisibleException("Element Not Found");
        }
    }
}
