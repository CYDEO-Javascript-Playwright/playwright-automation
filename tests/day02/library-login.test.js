import { test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config("./.env");

// come back at 12:25 PM US EST

test("@smoke Libraray Login", async ({ page }) => {
  // go to to https://library2.cydeo.com/
  await page.goto(process.env.LIBRARY_URL);

  // create locator variable named usernameInput
  const usernameInput = await page.locator("//input[@id='inputEmail']");

  // create locator variable named passwordInput and use this xpath //input[@id='inputPassword'] to locate
  const passwordInput = await page.locator("//input[@id='inputPassword']");

  // create locator variable named signinButton and use this xpath //button[@type='submit'] to locate
  const signinButton = await page.locator("//button[@type='submit']");

  // pause the automation for 2 seconds
  await page.waitForTimeout(2000);

  // enter username and password
  await usernameInput.fill(process.env.LIBRARY_STUDENT_USERNAME);

  await page.waitForTimeout(2000);

  await passwordInput.fill(process.env.LIBRARY_STUDENT_PASSWORD);

  // click on signin button
  await signinButton.click();

  await page.waitForTimeout(2000);

});
