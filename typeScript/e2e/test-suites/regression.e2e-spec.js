"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_po_1 = require("../page-objects/pages/login/login.po");
const compose_po_1 = require("../page-objects/pages/login/compose.po");
const protractor_1 = require("protractor");
const social_po_1 = require("../page-objects/pages/login/social.po");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const { When, Then } = require("cucumber");
const Login = new login_po_1.LoginPage();
const ComposeEmail = new compose_po_1.EmailPage();
const SocialTab = new social_po_1.SocialPage();
When(/^I have logged into gmail account$/, { timeout: 100 * 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield Login.enterUsername.sendKeys(protractor_1.browser.params.username);
    yield Login.clickNext.click();
    yield protractor_1.browser.sleep(5000);
    yield Login.enterPassword.sendKeys(protractor_1.browser.params.password);
    yield Login.clickNext.click();
}));
When(/^I compose new email$/, { timeout: 100 * 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(50000);
    yield ComposeEmail.composeEmail.click();
    yield protractor_1.browser.sleep(5000);
}));
When(/^I have provided email address subject body and attachment$/, { timeout: 100 * 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield ComposeEmail.enterContacts.sendKeys(protractor_1.browser.params.username);
    yield ComposeEmail.enterSubject.sendKeys(protractor_1.browser.params.subject);
    yield ComposeEmail.enterMessageBody.sendKeys(protractor_1.browser.params.messagebody);
    yield ComposeEmail.addAttachment.sendKeys(protractor_1.browser.params.attachment);
}));
When(/^I have labeled email as social$/, { timeout: 100 * 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield ComposeEmail.addOptions.click();
    yield protractor_1.browser.sleep(5000);
    yield ComposeEmail.clickLabel.click();
    yield protractor_1.browser.sleep(5000);
    yield ComposeEmail.addSocial.click();
}));
When(/^I have send a email$/, { timeout: 100 * 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield ComposeEmail.sendEmail.click();
    yield protractor_1.browser.sleep(5000);
    yield SocialTab.socialTab.click();
}));
When(/^I have click on social label$/, { timeout: 100 * 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield SocialTab.clickOnSubject.click();
}));
Then(/^Verify the subject mail body email address and attachment$/, { timeout: 100 * 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield SocialTab.getContactdetails.getText()
        .then(function (text) {
        console.log(text);
        expect(text).to.equal("imran khan");
    });
    yield protractor_1.browser.sleep(5000);
    yield SocialTab.getMailSubject.getText()
        .then(function (text) {
        console.log(text);
        expect(text).to.equal(protractor_1.browser.params.subject);
    });
    yield protractor_1.browser.sleep(5000);
    yield SocialTab.getAttachementDetail.getText()
        .then(function (text) {
        console.log(text);
        expect(text).to.equal("README.md");
    });
    yield SocialTab.getMailBody.getText()
        .then(function (text) {
        console.log(text);
        expect(text).to.equal(protractor_1.browser.params.messagebody);
    });
}));
