import { test, expect } from "@playwright/test";

// Define the test group
test.describe("Test Group", () => {
  // create beforeEach hook that navigates to https://practice.cydeo.com/iframe
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe");
  });


  test("Locate the iframe by id", async ({ page }) => {
    const myFrame = page.frameLocator("#mce_0_ifr");

    const elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

    //await elementInsideTheFrame.clear();

   // await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Control+A");
   // await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Backspace");
   // await page.waitForTimeout(3000);

    await elementInsideTheFrame.fill("Hello World!")

    // pause the automation for 3 seconds
    //await page.waitForTimeout(3000);

    console.log(await elementInsideTheFrame.innerText());

    await expect(elementInsideTheFrame).toHaveText("Hello World!");


  });


  test("Locate the iframe using CSS", async ({ page }) => {

    const myFrame = page.frameLocator("iframe[id='mce_0_ifr'][title='Rich Text Area']");

    const elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

    await expect(elementInsideTheFrame).toBeEnabled();

  });

  // Test 4
  test("Locate the iframe using Xpath", async ({ page }) => {
    const myFrame = page.frameLocator("//iframe[@title='Rich Text Area']");

    const elementInsideTheFrame = myFrame.locator("//body[@id='tinymce']");

    await expect(elementInsideTheFrame).not.toBeDisabled();
    await expect(elementInsideTheFrame).not.toBeHidden();
  });

});


/*
<iframe id="mce_0_ifr" frameborder="0" allowtransparency="true" title="Rich Text Area" class="tox-edit-area__iframe"></iframe>
*/