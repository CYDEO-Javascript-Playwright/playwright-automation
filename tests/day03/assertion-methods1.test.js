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
