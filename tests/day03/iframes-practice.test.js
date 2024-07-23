import { test, expect } from "@playwright/test";

// Define the test group
test.describe("Test Group", () => {
  // create beforeEach hook that navigates to https://practice.cydeo.com/iframe
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe");
  });

  // Test 1
  test("Test 1 description", async ({ page }) => {});

  // Test 2
  test("Test 2 description", async ({ page }) => {});

  // Test 3
  test("Test 3 description", async ({ page }) => {});

  // Test 4
  test("Test 4 description", async ({ page }) => {});
  
});
