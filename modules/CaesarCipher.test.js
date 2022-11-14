import { caesarCipher } from "./CaesarCipher";

test("shift letter", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});

test("shift returns to 'a' after 'z'", () => {
  expect(caesarCipher("xyz", 6)).toBe("def");
});

test("same case is returned", () => {
  expect(caesarCipher("AbcD", 2)).toBe("CdeF");
});
