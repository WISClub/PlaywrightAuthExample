//tests\auth.setup.ts - this is a playwright test that is used to authenticate a user and save the authentication state to a file
//it will run before the other tests and will save the authentication state to a file

import { test as setup } from "@playwright/test"; //when importing the test function it is given the nickname setup
import "dotenv/config";

let username: string = process.env.GH_UNAME ?? ""; //if the GH_UNAME environment variable is not set, then use an empty string
let password: string = atob(process.env.GH_PWD ?? "") || ""; //same as above, but also decode the base64 string

const authFile = process.env.STORAGE_STATE_PATH; //where to save the authentication state

setup("authenticate", async ({ page }) => {
  // Perform authentication steps.
  await page.goto("/api/auth/login"); //this is the route that is handled by the auth0 library
  await page.waitForURL("https://is373-dev.us.auth0.com/**"); //wait for the auth0 login page, /** is a wildcard to ignore the rest of the url
  await page.click('button[data-provider="github"]'); //click the github login button
  await page.getByLabel("Username or email address").fill(username); //fill the username field
  await page.getByLabel("Password").fill(password); //fill the password field
  let signInButtons = await page.getByRole("button", { name: "Sign in" }); //get the sign in button
  await signInButtons.first().click(); //click the sign in button
  // End of authentication steps.
  await page.waitForURL("http://127.0.0.1:3000"); //wait for the url in the playwright config (where the app is running)
  await page.context().storageState({ path: authFile }); //save the state of the browser and its authentication to a file
});
