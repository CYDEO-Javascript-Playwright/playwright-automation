import { test } from "@playwright/test";


test("Libraray Login", async ({ page }) => {
  // go to to https://library2.cydeo.com/
  await page.goto("");

  // create locator variable named usernameInput
  const usernameInput = await page.locator("//input[@id='inputEmail']");

  // create locator variable named passwordInput and use this xpath //input[@id='inputPassword'] to locate
  const passwordInput = await page.locator("//input[@id='inputPassword']");

  // create locator variable named signinButton and use this xpath //button[@type='submit'] to locate
  const signinButton = await page.locator("//button[@type='submit']");

  // pause the automation for 2 seconds
  await page.waitForTimeout(2000);

  // enter username and password
  await usernameInput.fill("");

  await page.waitForTimeout(2000);

  await passwordInput.fill("");

  // click on signin button
  await signinButton.click();

  await page.waitForTimeout(2000);

});
