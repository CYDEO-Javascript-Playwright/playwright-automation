import { test, expect } from "@playwright/test";

test.describe("Assertion Methods Part2", async () => {

  let elements;
  let count;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    elements = page.locator("//ul[@class='list-group']/li/a");
    count = await elements.count();
  });

  test("Verify that there are 50 elements under the url tag", async ({page}) => {
    expect(count).toEqual(50);
  });

  test("Verify all 50 elements under the url tag are visible", async ({page}) => {
      // create a for loop that has 50 iterations
      for (let i = 0; i < count; i++) {
        // get the i-th element
        const element = elements.nth(i);
        // check if the element is visible
        expect(await element.isVisible()).toBeTruthy();
        //await expect(element).toBeVisible();
        // display the visible text of each element
        console.log(await element.innerText());
      }

  });

  test("Verify all 50 elements under the url tag are enabled", async ({page}) => {
    for (let i = 0; i < count; i++) {
      const element = elements.nth(i);
      expect(await element.isEnabled()).toBeTruthy();
      //await expect(element).toBeEnabled();
      // print thr href of each element
      console.log(await element.getAttribute("href"));
    }
  });


});