// playwright.config.ts  - this is the configuration file for the playwright tests
import "dotenv/config";
import { defineConfig, devices } from '@playwright/test';


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ?2:0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,//this is how many workers to use, IF THERE ARE ANY ISSUES WITH THE TESTS, TRY CHANGING THIS NUMBER TO 1
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000', // I would not set this to the hosted url (like *.vercel.app) because it will be different from the code running locally
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/},
    {
      name: 'chromium',
      dependencies: ['setup'],
      testMatch: /.*\.spec\.ts/,
      use: {...devices['Desktop Chrome'],
      storageState: 'playwright/.auth/user.json', //this is set in the setup test
      },
    },
    //uncomment the following to run tests on firefox and safari
    /*
    {
      name: 'firefox',
      dependencies: ['setup'],
      use: {...devices['Desktop Firefox'], storageState: 'playwright/.auth/user.json' },
    },

    {
      name: 'webkit',
      dependencies: ['setup'],
      use: {...devices['Desktop Safari'],storageState: 'playwright/.auth/user.json'},
    },
    */



    
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run build && npm run start',//the command to start the server, running npm run build && npm run start will start the server as well and may check for errors in building but it will take a lot
    url: 'http://localhost:3000',//the url that playwright will use to access the server
    reuseExistingServer: !process.env.CI,
    env: {
      AUTH0_SECRET: process.env.AUTH0_SECRET_TEST??'',
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID_TEST??'',
      AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET_TEST??'',
      TEST_UNAME: process.env.TEST_UNAME??'',
      TEST_PWD: process.env.TEST_PWD??'',
    },
  },

});
