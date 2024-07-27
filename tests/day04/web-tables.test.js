import { test, expect } from "@playwright/test";

//create a test group with 3 tests in it
test.describe("Web Tables", async () => {
  let table, rows, columns;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/web-tables");
    table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    rows = table.locator("//tr");
    columns = table.locator("//th");
  });

  // after reach, pause the automation for 2 seconds
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });

  test("Verify rows and columns in the web table", async ({ page }) => {
    expect(await rows.count()).toEqual(9);
    expect(await columns.count()).toEqual(13);
  });

  test("Read all data from the web table", async ({ page }) => {
    // display data from each cell of the table
    for (let i = 1; i < (await rows.count()); i++) {
      for (let j = 0; j < (await columns.count()) - 1; j++) {
        const cell = table.locator(`//tr[${i + 1}]/td[${j + 1}]`);
        console.log(await cell.innerText());
      }
      console.log("-------------------------------------");
    }

  });

  test("Verify that check boxes of the web table can be checked", async ({ page }) => {
    const checkBoxes = table.locator("//input[@type='checkbox']");

    // verify that there are 8 check boxes
    expect(await checkBoxes.count()).toEqual(8);

    // use for of loop to access each checkbox
    for (const checkbox of await checkBoxes.all()) {
        await page.waitForTimeout(2000);
        expect(await checkbox.isChecked()).toBeFalsy();  // verify that checkbox is unchekced
        await checkbox.check();
        expect(await checkbox.isChecked()).toBeTruthy(); // verify that checkbox is checked
    }

  });

});
