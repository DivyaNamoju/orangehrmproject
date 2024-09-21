import { expect, Page } from "@playwright/test";

export default class LoginPage{

    constructor(public page:Page)
    {
        this.page=page;
    }
    async navigateToURL()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async enterCredentials(uname:string, pword:string)
    {
        await this.page.locator("//input[@name='username']").fill(uname);
        await this.page.locator("//input[@name='password']").fill(pword);
    }
    async clickOnSignin()
    {
        await this.page.getByRole("button", {name : "Login"}).click();
    }
    async isUserOndashboard()
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    }
    async isInvalidCredentialDisplayed()
    {
        await expect(this.page.getByText("Invalid credentials")).toBeVisible();
    }
}