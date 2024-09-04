import { defineConfig } from "@playwright/test";
require('dotenv').config()

export default defineConfig({
    use:{
        baseURL: process.env.URL ,
        extraHTTPHeaders:{
            'Content-Type': 'application/json',
          
        },
  
    // maxFailures: 5

    },
    trace: 'on-first-retry',
    headless:true,
    retries:2,
})
