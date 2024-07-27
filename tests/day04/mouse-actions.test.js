import { test, expect } from "@playwright/test";

//create a test group with 3 tests in it
test.describe("Test Group", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  // after reach, pause the automation for 2 seconds
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("", async ({ page }) => {

  });

  test("A", async ({ page }) => {

  });

  test("B", async ({ page }) => {

  });
  

});
