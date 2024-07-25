import { test, expect } from "@playwright/test";

test.describe("Assertion Methods", () => {
  test("toBe example", async () => {
    let elementValue = 5;
    expect(elementValue).toBe(5);
  });

  test("toBeTruthy & toBeFalsy examples", async () => {
    let value1 = true;

    expect(value1).toBeTruthy(); // assertTrue

    let value2 = false;

    expect(value2).toBeFalsy(); // assertFalse
  });

  test("toContain Example", async () => {
    let s = "Cydeo School";

    expect(s).toContain("Cydeo");
  });

  test("toEqual example", async () => {
    let elementValue = 5;
    expect(elementValue).toBe(5); // == operator of Java
    expect(elementValue).toEqual(5); // .equals method of Java

    let obj1 = { a: 1, b: 2 };
    let obj2 = { a: 1, b: 2 };

    // expect(obj1).toBe(obj2);
    expect(obj1).toEqual(obj2);

  });
});




/*

// create a function can pause for given number of seconds
function pause(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

test.describe("pause function tests", () => {
  test("pause function resolves if input is a positive integer", async () => {
    const positiveInteger = 1;

    await expect(pause(positiveInteger)).resolves.not.toThrow();
  });

  test("pause function rejects with RangeError if input is greater than max safe integer", async () => {
    const maxSafeInteger = Number.MAX_SAFE_INTEGER;
    const largeNumber = maxSafeInteger + 1;

    await expect(pause(largeNumber)).rejects.toThrow(RangeError);
  });

  test("pause function rejects with RangeError if input is negative", async () => {
    const negativeNumber = -1;

    await expect(pause(negativeNumber)).rejects.toThrow(RangeError);
  });

  test("pause function resolves if input is zero", async () => {
    const zero = 0;

    await expect(pause(zero)).resolves.not.toThrow();
  });

  test("pause function resolves if input is a fractional number", async () => {
    const fractionalNumber = 0.5;

    await expect(pause(fractionalNumber)).resolves.not.toThrow();
  });

  test("pause function rejects with RangeError if input is not a number", async () => {
    const nonNumber = "not a number";

    await expect(pause(nonNumber)).rejects.toThrow(RangeError);
  });
});
*/