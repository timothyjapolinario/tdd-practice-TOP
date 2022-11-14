import capitalize from "./Capitalize";
test("capitalize string", () => {
  expect(capitalize("text")).toBe("TEXT");
});
