//tests\auth.setup.ts - this is a playwright test that is used to authenticate a user and save the authentication state to a file
//it will run before the other tests and will save the authentication state to a file

import { expect, test as setup } from "@playwright/test"; //when importing the test function it is given the nickname setup
import "dotenv/config";
let username: string = process.env.TEST_UNAME ?? ""; //if the TEST_UNAME environment variable is not set, then use an empty string
let password: string = atob(process.env.TEST_PWD ?? "") || ""; //same as above, but also decode the base64 string

const authFile = process.env.STORAGE_STATE_PATH; //where to save the authentication state

setup("authenticate", async ({ page }) => {
  await page.goto(`${process.env.AUTH0_BASE_URL}/api/auth/login`);
  await page.waitForURL(`${process.env.AUTH0_ISSUER_BASE_URL}/**`);
  await page.getByLabel("Email address").fill(username);
  await page.getByLabel("Password").fill(password);
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.waitForURL(process.env.AUTH0_BASE_URL + ""); // the +"" is to make typescript shut up 💀
  await page.context().storageState({ path: authFile });
});
