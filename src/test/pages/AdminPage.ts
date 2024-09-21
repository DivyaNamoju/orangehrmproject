import { Page } from "@playwright/test";

export default class AdminPage{

    constructor(public page:Page)
    {
        this.page=page;
    }
    async clickOnAdminMenu()
    {
        await this.page.getByText("Admin").click();
    }
    async clickOnUserManagement()
    {
        await this.page.getByText("User Management").click();
    }
    async clickOnUsers()
    {
        await this.page.locator("//a[text()='Users']").click();
    }
    async isRecordsPresentMessage()
    {
        return await this.page.locator("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] span[class='oxd-text oxd-text--span']")
        .isVisible();
    }
}