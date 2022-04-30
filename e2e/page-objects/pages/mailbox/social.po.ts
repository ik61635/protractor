import { browser, By, element, ElementFinder } from 'protractor';

export class SocialPage {


    public get socialTab() {
        browser.wait(function () {
            return element(By.xpath("//div[contains(@data-tooltip,'Messages from social networks, media-sharing sites, online dating services, and other social websites.')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("//div[contains(@data-tooltip,'Messages from social networks, media-sharing sites, online dating services, and other social websites.')]"));
    }
    public get getMailSubject() {
        browser.wait(function () {
            return element(By.xpath("//h2[contains(.,'Test subject')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("//h2[contains(.,'Test subject')]"));
    }

    public get getMailBody() {
        browser.wait(function () {
            return element(By.xpath("(//div[contains(.,'Test Body')])[40]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("(//div[contains(.,'Test Body')])[40]"));
    }


    public get clickOnSubject() {
        browser.wait(function () {
            return element(By.xpath("(//tr)/td/div/div/div/span[contains(.,'Test subject')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("(//tr)/td/div/div/div/span[contains(.,'Test subject')]"));

    }
    public get getContactdetails() {
        browser.wait(function () {
            return element(By.xpath("//span[contains(@email,'imran.khan97182@gmail.com') and contains(@name,'imran')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
       return element(By.xpath("//span[contains(@email,'imran.khan97182@gmail.com') and contains(@name,'imran')]"));
           
    }
    public get getAttachementDetail() {
        browser.wait(function () {
            return element(By.xpath("(//span[contains(.,'README.md')])[3]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("(//span[contains(.,'README.md')])[3]"));

    }

   
}
