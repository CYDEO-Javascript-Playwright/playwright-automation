import test from "playwright/test";


test.describe("Cydeo practice website tests", async () => {

    test.beforeEach( async ({page}) => { 
        await page.goto("https://practice.cydeo.com/");
    });

    test.afterEach( async ({page}) => { 
        await page.waitForTimeout(2000);
    });


  test("A/B Testing is clickable", async ({page}) => {
    
    const abTestingElement = await page.locator("text='A/B Testing'");
    console.log(`A/B Testing is clickable: ${await abTestingElement.isEnabled()}`);
    abTestingElement.click();

  });

  test("Add/Remove Elements is enabled", async ({page}) => {
    const addRemoveElements = await page.locator("text='Add/Remove Elements'");
    console.log(`Add/Remove Elements is enabled: ${await addRemoveElements.isEnabled()}`);

  });

  test("Autocomplete is displayed", async ({page}) => {
    const autocomplete = await page.locator("text='Autocomplete'");
    console.log(`Autocomplete is displayed: ${await autocomplete.isVisible()}`);

  });

});




// ----------------------------------------------------------------


test.describe("Test Group", async () => {

    test.beforeAll( async () => { 
        console.log("Before All executed");
    });

    test.afterAll( async () => { 
        console.log("After All executed");
    });

    test.beforeEach( async () => { 
        console.log("Before Each executed");
    });

    test.afterEach( async () => { 
        console.log("After Each executed");
    });

  test("Test 1", async () => {
    console.log("Test 1 executed successfully");
  });

  test("Test 2", async () => {
    console.log("Test 2 executed successfully");
  });

  test("Test 3", async () => {
    console.log("Test 3 executed successfully");
  });


});

