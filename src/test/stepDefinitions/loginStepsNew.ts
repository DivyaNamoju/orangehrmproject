import { Given, setDefaultTimeout, Then, When } from '@cucumber/cucumber'
import { pageFixture } from '../hooks/pageFixture';
import LoginPage from '../pages/LoginPage';

setDefaultTimeout(60 * 1000 * 2)
let loginPage:LoginPage;

  Given('user navigates to application', async function () {
    loginPage = new LoginPage(pageFixture.page);
    await loginPage.navigateToURL();
  });
  When('user enters username {string} and password {string}', async function (username, password) {
    await loginPage.enterCredentials(username,password);
  });
  When('clicks on Login button', async function () {
    await loginPage.clickOnSignin();
  });
  Then('user lands on Dashboard', async function () {
    await loginPage.isUserOndashboard();
  });
  Then('user should view the warning message', async function () {
    await loginPage.isInvalidCredentialDisplayed();
  });