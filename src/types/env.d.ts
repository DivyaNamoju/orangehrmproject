export {}; // export default module
// Set up custom variables
// https://www.knowledgehut.com/blog/web-development/node-environment-variables

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        BROWSER:"chromium" | "firefox" | "webkit" ,
        ENV:"qa" | "staging" | "preprod" | "prod"
        BASEURL:string
        HEAD:"true" | "false"
    }
  }
}

