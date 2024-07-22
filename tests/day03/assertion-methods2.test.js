import { test, expect } from "@playwright/test";

test.describe("Assertion Methods Part2", async () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Verify that there are 50 elements under the url tag", async ({page}) => {

  });

  test("Verify all 50 elements under the url tag are visible", async ({page}) => {

  });

  test("Verify all 50 elements under the url tag are enabled", async ({page}) => {

  });

  test("Verify all 50 elements under url tag have href attribute", async ({page}) => {

  });

});