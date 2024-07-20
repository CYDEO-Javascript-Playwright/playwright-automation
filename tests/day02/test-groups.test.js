import test from "playwright/test";

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
