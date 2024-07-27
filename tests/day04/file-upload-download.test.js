import { test, expect } from "@playwright/test";
import path from "path";

//create a test group with 3 tests in it
test.describe("File upload and download", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  // after reach, pause the automation for 2 seconds
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("File upload test", async ({ page }) => {
    await page.click("text='File Upload'");

    expect(page.url()).toBe("https://practice.cydeo.com/upload");

    // file path:
    const filePath = path.join(__dirname, "upload", "Upload File.txt");

    // send the file to the elemnt
    //await page.waitForTimeout(4000);
    page.setInputFiles("//input[@id='file-upload' and @type='file']", filePath);
    //await page.waitForTimeout(2000);

    // click uplaod
    page.click("//input[@id='file-submit' and @type='submit']");

    await expect(page.locator("//h3[text()='File Uploaded!']")).toBeVisible();
  });


  test("File Download Test", async ({ page }) => {
    // setting listner for download event
    const downloadPromise = page.waitForEvent("download"); // promise is created: pending promise

    await page.click("text='File Download'"); 

    expect(page.url()).toBe("https://practice.cydeo.com/download");

    page.click("//a[@href='download/Sesson3.txt']"); // click the file to download

    const download = await downloadPromise; // promise is either full filled or rejeected

    expect(download.suggestedFilename()).toBe("Sesson3.txt");

  });

  
  
  test("Save the file that's downloaded", async ({ page }) => {

    const downloadPromise = page.waitForEvent("download"); // promise is created: pending promise

    await page.click("text='File Download'"); 

    expect(page.url()).toBe("https://practice.cydeo.com/download");

    page.click("//a[@href='download/Sesson3.txt']"); // click the file to download

    const download = await downloadPromise; // promise is either full filled or rejeected

    expect(download.suggestedFilename()).toBe("Sesson3.txt");


    //   save the  downloaded file: 
    const downloadPath= path.join(__dirname, "download", download.suggestedFilename() );
    await download.saveAs(downloadPath);


  });


});
