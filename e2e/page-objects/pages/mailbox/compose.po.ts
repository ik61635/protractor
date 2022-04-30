import { browser, By, element, ElementFinder } from 'protractor';

export class EmailPage {


    public get composeEmail() {
        browser.wait(function () {
            return element(By.xpath("//div[contains(@role,'button') and contains(.,'Compose')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("//div[contains(@role,'button') and contains(.,'Compose')]"));
    }
    public get enterSubject() {
        browser.wait(function () {
            return element(By.xpath("//input[contains(@name,'subjectbox')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("//input[contains(@name,'subjectbox')]"));
    }

    public get enterContacts() {
        browser.wait(function () {
            return element(By.xpath("//td[div[span[contains(@data-tooltip,'Select Contacts')]]]//following-sibling::td/div/div/textarea")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("//td[div[span[contains(@data-tooltip,'Select Contacts')]]]//following-sibling::td/div/div/textarea"));

    }
    public get enterMessageBody() {
        browser.wait(function () {
            return element(By.xpath("//div[contains(@aria-label,'Message Body')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
       return element(By.xpath("//div[contains(@aria-label,'Message Body')]"));
           
    }
    public get addAttachment() {
        browser.wait(function () {
            return element(By.xpath("//input[@type='file']")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("//input[@type='file']"));

    }

    public get addOptions() {
        browser.wait(function () {
            return element(By.xpath("//div[contains(@data-tooltip,'More options')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return  element(By.xpath("//div[contains(@data-tooltip,'More options')]"));
           
      
    }
    public get clickLabel() {
        browser.wait(function () {
            return element(By.xpath("(//div[contains(.,'Label')])[30]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return element(By.xpath("(//div[contains(.,'Label')])[30]"));
          
    }
 
    public get addSocial() {
        browser.wait(function () {
            return element(By.xpath("//div[contains(@role,'menuitemcheckbox')]//div[contains(.,'Social')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
            return  element(By.xpath("//div[contains(@role,'menuitemcheckbox')]//div[contains(.,'Social')]"));
            
    }
    public get sendEmail() {
        browser.wait(function () {
            return element(By.xpath("//div[contains(@role,'button') and contains(.,'Send')]")).isDisplayed()
                .then(
                    function (isDisplayed) {
                        return isDisplayed;
                    },
                    function (error) {
                        return false
                    });
        }, 20 * 1000);
        return  element(By.xpath("//div[contains(@role,'button') and contains(.,'Send')]"));
           

    }
}
