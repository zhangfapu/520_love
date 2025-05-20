# Test info

- Name: deploy520_2025-05-20
- Location: C:\Users\zhang\new\playwright_auto\deploy520_c9dac3ec-d242-4776-94cd-f265b9ac892c.spec.ts:5:5

# Error details

```
Error: expect(received).not.toContain(expected) // indexOf

Expected substring: not "404"
Received string:        "

    

      404
      There isn't a GitHub Pages site here.

      
        If you're trying to publish one,
        read the full documentation
        to learn how to set up GitHub Pages
        for your repository, organization, or user account.
      

      
        GitHub Status —
        @githubstatus
      

      
        
      

      
        
      
    
  

"
    at C:\Users\zhang\new\playwright_auto\deploy520_c9dac3ec-d242-4776-94cd-f265b9ac892c.spec.ts:12:26
```

# Page snapshot

```yaml
- heading "404" [level=1]
- paragraph:
  - strong: There isn't a GitHub Pages site here.
- paragraph:
  - text: If you're trying to publish one,
  - link "read the full documentation":
    - /url: https://help.github.com/pages/
  - text: to learn how to set up
  - strong: GitHub Pages
  - text: for your repository, organization, or user account.
- link "GitHub Status":
  - /url: https://githubstatus.com
- text: —
- link "@githubstatus":
  - /url: https://twitter.com/githubstatus
- link:
  - /url: /
```

# Test source

```ts
   1 |
   2 | import { test } from '@playwright/test';
   3 | import { expect } from '@playwright/test';
   4 |
   5 | test('deploy520_2025-05-20', async ({ page, context }) => {
   6 |   
   7 |     // Navigate to URL
   8 |     await page.goto('https://zhangfapu.github.io/520_love/');
   9 |
  10 |     // Check for 404 or error messages
  11 |     const bodyText = await page.textContent('body');
> 12 |     expect(bodyText).not.toContain('404');
     |                          ^ Error: expect(received).not.toContain(expected) // indexOf
  13 |     expect(bodyText).not.toContain('Page Not Found');
  14 |     expect(bodyText).not.toContain('页面未找到');
  15 |
  16 |     // Verify page title
  17 |     await expect(page).toHaveTitle('520专属浪漫表白');
  18 | });
```