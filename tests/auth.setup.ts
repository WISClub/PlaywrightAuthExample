import { test as setup, expect } from '@playwright/test';
import 'dotenv/config'
let username: string=process.env.GH_UNAME??'';
let password:string=atob(process.env.GH_PWD??'')||'';
let baseURL: string=process.env.AUTH0_BASE_URL??'';
const authFile = 'playwright/.auth/user.json';
setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
//   await page.goto('https://github.com/login');

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
//   await page.waitForURL('https://github.com/');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
//   await expect(page.getByRole('button', { name: 'View profile and more' })).toBeVisible();

  // End of authentication steps.

await page.goto("/api/auth/login");
//wait for https://is373-dev.us.auth0.com/
await page.waitForURL('https://is373-dev.us.auth0.com/**');
// button data-provider="github"
await page.click('button[data-provider="github"]');     
await page.getByLabel('Username or email address').fill(username);
await page.getByLabel('Password').fill(password);
let signInButtons = await page.getByRole('button', { name: 'Sign in' })
await signInButtons.first().click();
await page.waitForURL(baseURL);
await page.context().storageState({ path: authFile });
});