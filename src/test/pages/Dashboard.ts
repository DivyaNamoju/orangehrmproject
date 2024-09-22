import { Page } from "@playwright/test";

export default class Dashboard{

    constructor(public page:Page)
    {
        this.page=page;
    }
    async clickOnUserDropdown()
    {
        await this.page.locator("//p[@class='oxd-userdropdown-name']").click();
    }
    async clickOnLogout()
    {
        await this.page.getByText("Logout").click();
    }
}