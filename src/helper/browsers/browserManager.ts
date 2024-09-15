// Function to invoke browsers

import { chromium, firefox, LaunchOptions, webkit } from "@playwright/test";

const launchOptions:LaunchOptions={
    "headless":false
}
export const invokeBrowser = () =>{
    const browserName=process.env.BROWSER;
    // process.env.BROWSER;
    switch (browserName){
        case "chromium": return chromium.launch(launchOptions);
        case "firefox": return firefox.launch(launchOptions);
        case "webkit" : return webkit.launch(launchOptions);
        default : throw new Error("Please enter a valid browser name!!");
    }

}