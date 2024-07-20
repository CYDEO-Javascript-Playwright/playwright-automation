import { test, expect } from '@playwright/test';

test('state methods of locator', async ({ page }) => {
  
    await page.goto("https://practice.cydeo.com/");

    const autocomplete = await page.locator("text='Autocomplete'");

    const elementIsDisplayed = await autocomplete.isVisible();

    const elementIsDisabled = await autocomplete.isDisabled();

    const elementIsEnabled = await autocomplete.isEnabled();

    console.log(elementIsDisplayed);
    console.log(elementIsDisabled);
    console.log(elementIsEnabled);


    const checkBoxLink = await page.locator("text='Checkboxes'");

    await checkBoxLink.click();

    const checkBox1 = await page.locator('//input[@id="box1"]');

    const checkBox2 = await page.locator('//input[@id="box2"]');

    console.log( await checkBox1.isChecked());
    console.log( await checkBox2.isChecked());



});