import {browser,By, element,ElementFinder} from 'protractor';

export class LoginPage {

 public  get enterUsername() {
    return  element(By.xpath("//input[contains(@type,'email')]"));
    }
public get  clickNext() {
    return  element(By.xpath("//span[contains(.,'Next')]"));
        }

        public  get enterPassword() {
            browser.wait(function () {
               return element(By.xpath("//input[contains(@type,'password')]")).isDisplayed()
               .then(
                   function (isDisplayed) { 
                       return isDisplayed; 
                   }, 
                   function (error) { 
                       return false 
                   });
           }, 20 * 1000);
           return      element(By.xpath("//input[contains(@type,'password')]"));
                   }
}
