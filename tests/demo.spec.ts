import { test, expect } from '@playwright/test';
import 'dotenv/config'
test('get status', async ({ page }) => {
    await page.goto('/');
    //javascript fetch the status code
    let status = await page.evaluate(() => {
        return fetch('/').then(res => res.status);
    }
    );
    expect(status).toBe(200);
}
);

test("login", async ({ page}) => {
await page.goto('/api/auth/login');
await page.waitForURL("http://127.0.0.1:3000/");
let url=await page.url();
expect(url).toBe(`http://127.0.0.1:3000/`);
let a=await page.$('a');
expect(a).toBeTruthy(); 
let text=await a?.textContent();    
expect(text).toBe('LOGIN');
let aClass=await a?.getAttribute('class');
expect(aClass).toBe('logout');
});