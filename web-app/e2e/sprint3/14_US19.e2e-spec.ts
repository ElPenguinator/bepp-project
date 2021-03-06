import {browser, by, element} from "protractor";

describe('Showing the userstories of a sprint (mini Backlog)', function() {

    it("The userstories (minibacklog) is here", function() {

        browser.get('http://localhost:8080/');

        //Fill the email and password fields and submit
        element(by.name('email')).sendKeys('test@bepp.fr');
        element(by.name('password')).sendKeys('123');

        element(by.name('login')).click();

        element(by.name('ProjetTest')).click();

        //Go to sprints menu
        element(by.name('sprints')).click();
        browser.sleep(500);

        // element(by.name('goto')).click();
        // browser.sleep(500);

        element(by.name('logout')).click();

    });
});
