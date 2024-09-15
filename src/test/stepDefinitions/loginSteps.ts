import {Given, Then, When, setDefaultTimeout} from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import {expect} from '@playwright/test';
setDefaultTimeout(60 * 1000 ) // Modifying default timeout 5000 milliseconds globally

Given('user is on application', {timeout: 60 * 1000}, async function () {
    await pageFixture.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

});
When('user enters username {string}', async function (string) {
        await pageFixture.page.locator("//input[@name='username']").fill(string);
    });
When('user enter password {string}', async function (string) {
    await pageFixture.page.getByPlaceholder("Password").fill(string);
});
When('clicks on Sign in button', async function () {
 await pageFixture.page.getByRole("button", {name : "Login"}).click();
});
Then('user lands on dashboard', async function () {
    await expect(pageFixture.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});
Then('user views invalid credentials message', async function () {
    await expect(pageFixture.page.getByText("Invalid credentials user is invalid")).toBeVisible();
});
