import { test } from "@playwright/test";

test("InnerText method test", async ({ page }) => {
  // go to https://practice.cydeo.com/
  await page.goto("https://practice.cydeo.com/");

  const abTesting = await page.locator("text='A/B Testing'");
  //const abTesting = await page.getByText("text='A/B Testing'");

  await abTesting.click();

  await page.waitForTimeout(3000);

  const paragraph = await page.locator("//p[contains(text(), 'Also known as split testing')]");

  const innerText = await paragraph.innerText();

  console.log(innerText);


});


test('inputValue method test: only works with <input> or <textarea> or <select>', async ({ page }) => {
    


});


