import { test, expect } from "@playwright/test";

// Define the test group
test.describe("Test Group", () => {
  // create a beafureEach that navigates to https://practice.cydeo.com/javascript_alerts
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  test("Handling JS Alerts", async ({ page }) => {
    let alertMessage;

    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        alertMessage = dialog.message();
      //  await page.waitForTimeout(3000); 
        dialog.accept();
    });

    const clickForJsAlert = page.locator("//button[@onclick='jsAlert()']");

    await clickForJsAlert.click();

    await expect(page.locator("text='You successfully clicked an alert'")).toBeVisible();
    expect(alertMessage).toBe("I am a JS Alert");

  });

  
  test("Handling JS Confirm", async ({ page }) => {
      let confrimMessage;

    page.on('dialog', async (dialog) => {
        confrimMessage = dialog.message();
        //await page.waitForTimeout(3000);
        dialog.dismiss();
    });

    const clickForJsConfirm = page.locator("//button[contains(@class, 'btn-primary') and @onclick='jsConfirm()']");
    await clickForJsConfirm.click();

    await expect(page.locator("text='You clicked: Cancel'")).toBeVisible();
    expect(confrimMessage).toBe("I am a JS Confirm");

  });


  test("Handling JS Promopt", async ({ page }) => {

    let promptMessage;

    page.on('dialog', async (dialog) => {
        promptMessage =dialog.message();
        dialog.accept("CYDEO");
    });

    const clickForJsPrompt = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJsPrompt.click();

    await expect(page.locator("text='You entered: CYDEO'")).toBeVisible();

  });
});
