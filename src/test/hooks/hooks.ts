import { AfterAll, BeforeAll , Before, After, Status} from "@cucumber/cucumber";
import {webkit, Browser, Page, expect, BrowserContext} from '@playwright/test';
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../../helper/browsers/browserManager";
import { getEnv } from "../../helper/env/env";
import { createLogger, Logger } from "winston";
import { options } from "../../helper/utils/options";

// Reference : https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/hooks.md
// Reference : https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/api_reference.md

let browser:Browser;
let page:Page;
let browserContext : BrowserContext
let logger : Logger

BeforeAll(async function(){
    getEnv();
    browser = await invokeBrowser();
})
Before({name:"Setup browser context and page"}, async function({pickle}){
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    // unique scenario name
    const scenarioName = pickle.name + " " + pickle.id;
    // create logger
    logger = createLogger(options(scenarioName));
    pageFixture.page = page;
    pageFixture.log = logger;
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
    pageFixture.log.close();
})