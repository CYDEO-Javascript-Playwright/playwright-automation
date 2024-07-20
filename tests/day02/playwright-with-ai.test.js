import { test } from "@playwright/test";


test("Youtube test", async ({ page }) => {
  await page.goto("https://www.youtube.com/");

  const searchBox = await page.locator("//input[@id='search']");

  // pause the automation for 3 seconds
  await page.waitForTimeout(3000);


  await searchBox.click();

  await searchBox.fill("AI Prompt Engineering");

  await searchBox.press("Enter");

  await page.waitForTimeout(3000);

  const firstVideo = await page.locator("//a[@id='thumbnail' and contains(@href, '/watch?v=_ZvnD73m40o')]");

  await firstVideo.click();

  await page.waitForTimeout(10000);


});

