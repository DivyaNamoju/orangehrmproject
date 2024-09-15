import { AfterAll, BeforeAll , Before, After, Status} from "@cucumber/cucumber";
import {webkit, Browser, Page, expect, BrowserContext} from '@playwright/test';
import { pageFixture } from "./pageFixture";

// Reference : https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/hooks.md
// Reference : https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/api_reference.md

let browser:Browser;
let page:Page;
let browserContext : BrowserContext

BeforeAll(async function(){
    browser = await webkit.launch({headless:false});
})
Before({name:"Setup browser context and page"}, async function(){
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    pageFixture.page = page
})
After({name:"Tear down browser context and page"}, async function({pickle, result}){
    console.log("Test case execution status : " + result?.status);
    if(result?.status == Status.FAILED)
    {
        const img = await pageFixture.page.screenshot({path:"./test-results/screenshots/", type:'png'})
        await this.attach(img, "image/png");
    }
    await pageFixture.page.close();
    await browserContext.close();
})
AfterAll(async function(){
    await browser.close();
})