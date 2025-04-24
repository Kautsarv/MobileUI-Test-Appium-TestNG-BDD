# MobileUI-Test-Appium-TestNG-BDD
Automation Mobile Android Testing using Appium, TestNG, and Cucumber BDD

## Test Application
Source APK : https://github.com/saucelabs/my-demo-app-android/releases/tag/2.2.0 <br>
APK already stored inside this repository in *src/test/resources/apk/mda-2.2.0-25.apk*

## Tech Stack
1. IntelliJ - IDE
2. Java 1.8  - Programming language
3. Maven - Build automation tool
4. Appium - Mobile Automation library
5. TestNG - Test Management library
6. Cucumber - BDD
7. Extent Reports - Reporting framework

## Test Device
Code tested using Android Emulator <br>
Device : Pixel XL <br>
Screen Size : 1440 x 2560 <br>
API : 30 <br>
CPU/ABI : x86
### Desired Capabilities
    capabilities.setCapability("platformName", "Android");
    capabilities.setCapability("platformVersion", "11");
    capabilities.setCapability("deviceName", "Pixel-XL");
    capabilities.setCapability("automationName", "UiAutomator2");
    capabilities.setCapability("resetKeyboard", "true");
    capabilities.setCapability("unicodeKeyboard", "true");
    capabilities.setCapability("app", app.getAbsolutePath());
DesiredCapabilities can be configured in *src/test/java/utils/DriverFactory.java*

## Folder Structure
<img width="329" alt="Screenshot 2025-04-24 at 13 34 29" src="https://github.com/user-attachments/assets/63aae863-bed7-4f8a-b828-6602559ec74e" />

## Implemented Test Cases
### Login.feature
1. User Successfully Login and Logout With Valid Credential
2. User Not Allowed To Login Using Locked Account
3. User Submit Login With Empty Field

### Products.feature
1. User Successfully Checkout Product
2. User Successfully Remove Item From Cart
3. User Successfully Submit Review Product
4. User Successfully Sort Product
5. User Add Product To Cart With 0 Quantity
6. User Submit Shipping Address With Empty Mandatory Fields
7. User Submit Payment Method With Empty Mandatory Fields

## Report
Once the execution completes report will be generated in below folder.
**target/cucumber-reports/report.html**

<img width="1792" alt="Screenshot 2025-04-23 at 19 22 23" src="https://github.com/user-attachments/assets/7143a9d2-8a25-483d-801b-a0c65f6ae3ac" />

