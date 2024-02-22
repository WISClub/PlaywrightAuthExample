//tests\demo.spec.ts - this is a playwright test that is used to demonstrate how to use the authentication state saved by the auth.setup.ts test

import { test, expect } from "@playwright/test";
import "dotenv/config";



const authFile = "playwright/.auth/user.json"; //where to save the authentication state
test.use({ storageState: authFile }); //save the authentication state to the file


/**
 * This test will get the status code of the page
 * It does not need to be authenticated
 */
test("get status", async ({ page }) => {
  await page.goto("/");
  //javascript fetch the status code
  let status = await page.evaluate(() => {
    return fetch("/").then((res) => res.status);
  });
  expect(status).toBe(200);
});

/**
 * This test will check if the user is logged in
 * It needs to be authenticated to pass
 */
test.use({ storageState: authFile }); //use the authentication state saved in the file
test("login works", async ({ page  }) => {
  await page.goto("/");
  let a = await page.$("a");
  expect(a).toBeTruthy();
  let text = await a?.textContent();
  expect(text).toBe("LOGOUT");
  let aClass = await a?.getAttribute("class");
  expect(aClass).toBe("logout");
});
