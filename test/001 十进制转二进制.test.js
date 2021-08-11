const { dec2bin } = require("../src/001 十进制转二进制");

test("测试 100", () => {
  expect(dec2bin(100)).toBe("1100100");
});

test("测试 0", () => {
  expect(dec2bin(0)).toBe("0");
});

test("测试 1", () => {
  expect(dec2bin(1)).toBe("1");
})

test("测试 99", () => {
  expect(dec2bin(99)).toBe("1100011");
});
