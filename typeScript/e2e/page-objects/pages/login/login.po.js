"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPage {
    get enterUsername() {
        return protractor_1.element(protractor_1.By.xpath("//input[contains(@type,'email')]"));
    }
    get clickNext() {
        return protractor_1.element(protractor_1.By.xpath("//span[contains(.,'Next')]"));
    }
    get enterPassword() {
        protractor_1.browser.wait(function () {
            return protractor_1.element(protractor_1.By.xpath("//input[contains(@type,'password')]")).isDisplayed()
                .then(function (isDisplayed) {
                return isDisplayed;
            }, function (error) {
                return false;
            });
        }, 20 * 1000);
        return protractor_1.element(protractor_1.By.xpath("//input[contains(@type,'password')]"));
    }
}
exports.LoginPage = LoginPage;
