"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SocialPage {
    get socialTab() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//div[contains(@data-tooltip,'Messages from social networks, media-sharing sites, online dating services, and other social websites.')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//div[contains(@data-tooltip,'Messages from social networks, media-sharing sites, online dating services, and other social websites.')]"));
    }
    get getMailSubject() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//h2[contains(.,'Test subject')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//h2[contains(.,'Test subject')]"));
    }
    get getMailBody() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("(//div[contains(.,'Test Body')])[40]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("(//div[contains(.,'Test Body')])[40]"));
    }
    get clickOnSubject() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("(//tr)/td/div/div/div/span[contains(.,'Test subject')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("(//tr)/td/div/div/div/span[contains(.,'Test subject')]"));
    }
    get getContactdetails() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//span[contains(@email,'imran.khan97182@gmail.com') and contains(@name,'imran')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//span[contains(@email,'imran.khan97182@gmail.com') and contains(@name,'imran')]"));
    }
    get getAttachementDetail() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("(//span[contains(.,'README.md')])[3]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("(//span[contains(.,'README.md')])[3]"));
    }
}
exports.SocialPage = SocialPage;
