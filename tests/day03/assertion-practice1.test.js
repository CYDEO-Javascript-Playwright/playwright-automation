import { test, expect } from "@playwright/test";

test.describe("Assertion in UI testing", async () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Verify the page title is 'Practice'", async ({page}) => {

  });

  test("Verify the text 'Automation' is included the header element", async ({page}) => {

  });

  test("Verify the element 'A/B Testing' is clickable", async ({page}) => {

  });

  test("Verify the element 'Autocomplete' href is '/autocomplete' ", async ({page}) => {

  });

});


// come back at 7:45pm
