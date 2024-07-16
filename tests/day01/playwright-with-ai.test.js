import { test} from '@playwright/test';

test('Search for Cydeo on google', async ({ page }) => {
  
    // go to google website
    await page.goto('https://www.google.com/');

    // wait for 3 seconds
    await page.waitForTimeout(3000);

    const searchBox = await page.locator("//textarea[@id='APjFqb']");

    // fill 'Cydeo' into the search box
    await searchBox.fill('Cydeo');

    // press Enter to search
    await searchBox.press('Enter');

    // wait for 3 seconds
    await page.waitForTimeout(3000);


});

test('', async ({ page }) => {
  // Your test steps go here
  
});
