import { test, expect } from "@playwright/test";

// Define the test group
test.describe("Test Group", () => {
  // create beforeEach hook that navigates to https://practice.cydeo.com/iframe
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe");
  });

  // Test 1
  test("Locate the iframe by id", async ({ page }) => {});

  // Test 2
  test("Locate the iframe by name", async ({ page }) => {});

  // Test 3
  test("Locate the iframe busing CSS", async ({ page }) => {});

  // Test 4
  test("Locate the iframe busing Xpath", async ({ page }) => {});

});
