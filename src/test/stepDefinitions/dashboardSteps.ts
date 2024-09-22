import { Given, Then, When } from "@cucumber/cucumber";
import Dashboard from "../pages/Dashboard";
import { pageFixture } from "../hooks/pageFixture";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";

let dashboard:Dashboard;
let login:LoginPage;
let admin:AdminPage;

When('user clicks on user dropdown', async function () {
    dashboard = new Dashboard(pageFixture.page);
    login = new LoginPage(pageFixture.page);
    
    await dashboard.clickOnUserDropdown();
  });
  When('clicks on Logout', async function () {
    await dashboard.clickOnLogout();
  });
  Then('user lands on Login page', async function () {
    await login.isUserOnLogin();
  });
  Given('user clicks in Admin option', async function () {
    admin = new AdminPage(pageFixture.page);
    await admin.clickOnAdminMenu();
  });
  Then('user should view the records found message', async function () {
    await admin.isRecordsPresentMessage();
  });
  Then('user should view the user records', async function () {
    await admin.isRecordsDisplayed();
  });