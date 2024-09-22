import { expect, Page } from "@playwright/test";
import { pageFixture as page } from "../hooks/pageFixture";

export default class LoginPage{

    constructor(public page:Page)
    {
        this.page=page;
    }
    async navigateToURL()
    {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        page.log.info("Navigated to the URL");
    }
    async enterCredentials(uname:string, pword:string)
    {
        await this.page.locator("//input[@name='username']").fill(uname);
        page.log.info(`Entered username ${uname}`);
        await this.page.locator("//input[@name='password']").fill(pword);
        page.log.info(`Entered password ${pword}`);
    }
    async clickOnSignin()
    {
        await this.page.getByRole("button", {name : "Login"}).click();
        page.log.info("Clicked on Login button");
    }
    async isUserOndashboard()
    {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        page.log.info("User is on dashboard");
    }
    async isInvalidCredentialDisplayed()
    {
        await expect(this.page.getByText("Invalid credentials")).toBeVisible();
        page.log.info("Invalid credentials message displayed");
    }
    async isUserOnLogin()
    {
        await this.page.getByAltText("company-branding").isVisible();
        page.log.info("User is on Login page");
        // await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async isHRMlogo()
    {
        await this.page.getByAltText("company-branding").isVisible();
        page.log.info("User can view the HRM logo image on Login page");
    }
}