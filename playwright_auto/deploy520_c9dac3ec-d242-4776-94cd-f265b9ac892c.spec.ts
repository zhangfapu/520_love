
import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('deploy520_2025-05-20', async ({ page, context }) => {
  
    // Navigate to URL
    await page.goto('https://zhangfapu.github.io/520_love/');

    // Check for 404 or error messages
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('404');
    expect(bodyText).not.toContain('Page Not Found');
    expect(bodyText).not.toContain('页面未找到');

    // Verify page title
    await expect(page).toHaveTitle('520专属浪漫表白');
});