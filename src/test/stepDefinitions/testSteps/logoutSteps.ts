import {Given, Then, When} from "@cucumber/cucumber";
import {webkit, Browser, expect} from '@playwright/test';
import { pageFixture } from "../hooks/pageFixture";

Then('user can logout', {timeout: 60 * 1000}, async function () {
  await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await pageFixture.page.getByPlaceholder('Username').fill('Admin');
  await pageFixture.page.getByPlaceholder('Password').fill('admin123');
  await pageFixture.page.getByRole('button', { name: 'Login' }).press('Enter');
  await pageFixture.page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await pageFixture.page.getByRole('menuitem', { name: 'Logout' }).click();
});