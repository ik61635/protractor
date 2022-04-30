import {LoginPage} from '../page-objects/pages/login/login.po';
import {EmailPage} from '../page-objects/pages/mailbox/compose.po';
import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import {browser, By, element, ExpectedConditions} from 'protractor';
import { config } from '../../config/config';
import { SocialPage } from '../page-objects/pages/mailbox/social.po';
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const { When, Then } = require("cucumber");

const Login: LoginPage = new LoginPage();
const ComposeEmail: EmailPage = new EmailPage();
const SocialTab: SocialPage = new SocialPage();

When(/^I have logged into gmail account$/,{timeout: 100 * 100000}, async () => {
    await Login.enterUsername.sendKeys(browser.params.username);
    await Login.clickNext.click();
    await browser.sleep(5000);
    await Login.enterPassword.sendKeys(browser.params.password);
    await Login.clickNext.click();
  
    
});
When(/^I compose new email$/,{timeout: 100 * 100000}, async () => {
  await browser.sleep(50000);
  await ComposeEmail.composeEmail.click();
 
  
  
});

When(/^I have provided email address subject body and attachment$/,{timeout: 100 * 100000}, async () => {
  await ComposeEmail.enterContacts.sendKeys(browser.params.username);
  await ComposeEmail.enterSubject.sendKeys(browser.params.subject);
  await ComposeEmail.enterMessageBody.sendKeys(browser.params.messagebody);
  await ComposeEmail.addAttachment.sendKeys(browser.params.attachment);
  
  
});

When(/^I have labeled email as social$/,{timeout: 100 * 100000}, async () => {
  await browser.sleep(5000);
  await ComposeEmail.addOptions.click();
 
  await ComposeEmail.clickLabel.click();
 
  await ComposeEmail.addSocial.click();
  
  
  
});

When(/^I have send a email$/,{timeout: 100 * 100000}, async () => {
  
  await ComposeEmail.sendEmail.click();
 
  await SocialTab.socialTab.click();
  
});

When(/^I have click on social label$/,{timeout: 100 * 100000}, async () => {
  await browser.sleep(5000);
  await SocialTab.clickOnSubject.click();
});
Then(/^Verify the subject mail body email address and attachment$/,{timeout: 100 * 100000}, async () => {
  await browser.sleep(5000);
  await SocialTab.getContactdetails.getText()
  .then(function(text) {
    console.log(text);
    expect(text).to.equal("imran khan");
  });
  
 await SocialTab.getMailSubject.getText()
  .then(function(text) {
    console.log(text);
    expect(text).to.equal(browser.params.subject);
  });



  await SocialTab.getAttachementDetail.getText()
  .then(function(text) {
    console.log(text);
    expect(text).to.equal("README.md");
  });
  
  await SocialTab.getMailBody.getText()
  .then(function(text) {
    console.log(text);
    expect(text).to.equal(browser.params.messagebody);

  });
  
});