import {Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import {expect} from '@playwright/test';
setDefaultTimeout(60 * 1000 ) // Modifying default timeout 5000 milliseconds globally

Given('user is on application', {timeout: 60 * 1000}, async function () {
    await pageFixture.page.goto(process.env.BASEURL!);
    pageFixture.log.info("navigated to URL");
});
When('user enters username {string}', async function (string) {
        await pageFixture.page.locator("//input[@name='username']").fill(string);
        pageFixture.log.info("User entered username " + string );
    });
When('user enter password {string}', async function (string) {
    await pageFixture.page.getByPlaceholder("Password").fill(string);
    pageFixture.log.info("User entered password " + string );
});
When('clicks on Sign in button', async function () {
 await pageFixture.page.getByRole("button", {name : "Login"}).click();
 pageFixture.log.info("User clicked on Sign in button");
});
Then('user lands on dashboard', async function () {
    await expect(pageFixture.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    pageFixture.log.info("User lands on dashboard");
});
Then('user views invalid credentials message', async function () {
    await expect(pageFixture.page.getByText("Invalid credentials user is invalid")).toBeVisible();
});
