import { AfterAll, BeforeAll , Before, After, Status} from "@cucumber/cucumber";
import {webkit, Browser, Page, expect, BrowserContext} from '@playwright/test';
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../../helper/browsers/browserManager";
import { getEnv } from "../../helper/env/env";
import { createLogger, Logger } from "winston";
import { options } from "../../helper/utils/options";
import fs from 'fs';

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
    browserContext = await browser.newContext({
        recordVideo: {
            dir: 'test-results/videos/',
            size: { width: 640, height: 480 },
          }
    });
    page = await browserContext.newPage();
    // unique scenario name
    const scenarioName = pickle.name + " " + pickle.id;
    // create logger
    logger = createLogger(options(scenarioName));
    pageFixture.page = page;
    pageFixture.log = logger;
})
After({name:"Tear down browser context and page"}, async function({pickle, result}){
    const fileName = pickle.name + " " + pickle.id;
    console.log("Test case execution status : " + result?.status);
    let img:Buffer;
    let videoPath:string|undefined;
    if(result?.status == Status.FAILED)
    {
        img = await pageFixture.page.screenshot({path:`./test-results/screenshots/${fileName}`, type:'png'})
        videoPath = await pageFixture.page.video()?.path();
    }
    await pageFixture.page.close();
    await browserContext.close();
    if(result?.status == Status.FAILED){
    await this.attach(img!, "image/png");
    await this.attach(fs.readFileSync(videoPath!),'video/webm');
    }
})
AfterAll(async function(){
    await browser.close();
    pageFixture.log.close();
})