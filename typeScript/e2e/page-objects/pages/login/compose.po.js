"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class EmailPage {
    get composeEmail() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//div[contains(@role,'button') and contains(.,'Compose')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//div[contains(@role,'button') and contains(.,'Compose')]"));
    }
    get enterSubject() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//input[contains(@name,'subjectbox')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//input[contains(@name,'subjectbox')]"));
    }
    get enterContacts() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//td[div[span[contains(@data-tooltip,'Select Contacts')]]]//following-sibling::td/div/div/textarea")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//td[div[span[contains(@data-tooltip,'Select Contacts')]]]//following-sibling::td/div/div/textarea"));
    }
    get enterMessageBody() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//div[contains(@aria-label,'Message Body')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//div[contains(@aria-label,'Message Body')]"));
    }
    get addAttachment() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//input[@type='file']")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//input[@type='file']"));
    }
    get addOptions() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//div[contains(@data-tooltip,'More options')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//div[contains(@data-tooltip,'More options')]"));
    }
    get clickLabel() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("(//div[contains(.,'Label')])[30]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("(//div[contains(.,'Label')])[30]"));
    }
    get addSocial() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//div[contains(@role,'menuitemcheckbox')]//div[contains(.,'Social')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//div[contains(@role,'menuitemcheckbox')]//div[contains(.,'Social')]"));
    }
    get sendEmail() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//div[contains(@role,'button') and contains(.,'Send')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//div[contains(@role,'button') and contains(.,'Send')]"));
    }
}
exports.EmailPage = EmailPage;
