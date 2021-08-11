const { passFlowers } = require("../src/002 击鼓传花");

test("测试 A 和 1", () => {
  expect(passFlowers(["A"])).toBe("A");
});

test("测试 AB 和 1", () => {
  expect(passFlowers(["A", "B"], 1)).toBe("B");
});

test("测试 ABCDE 和 3", () => {
  expect(passFlowers(["A", "B", "C", "D", "E"], 3)).toBe("D");
});
