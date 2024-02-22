//tests\auth.setup.ts - this is a playwright test that is used to authenticate a user and save the authentication state to a file
//it will run before the other tests and will save the authentication state to a file

import { expect, test as setup } from "@playwright/test"; //when importing the test function it is given the nickname setup
import "dotenv/config";
let username: string = process.env.TEST_UNAME ?? ""; //if the TEST_UNAME environment variable is not set, then use an empty string
let password: string = atob(process.env.TEST_PWD ?? "") || ""; //same as above, but also decode the base64 string

const authFile = process.env.STORAGE_STATE_PATH; //where to save the authentication state

setup("authenticate", async ({ page }) => {
  await page.goto('http://localhost:3000/api/auth/login');
  await page.waitForURL('https://is373-dev.us.auth0.com/**');
  await page.getByLabel('Email address').fill(username);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.waitForURL('http://localhost:3000/');
  await page.context().storageState({ path: authFile });
});

