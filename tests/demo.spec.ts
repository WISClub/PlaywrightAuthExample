import { test, expect } from '@playwright/test';



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
