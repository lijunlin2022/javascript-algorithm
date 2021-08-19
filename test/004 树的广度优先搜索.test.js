const { bfsToString } = require("../src/004 树的广度优先搜索");

test("测试空对象", () => {
  expect(bfsToString({})).toBe("[]");
});

test("测试不为空的情况", () => {
  const tree = {
    val: "a",
    children: [
      {
        val: "b",
        children: [
          {
            val: "d",
            children: []
          },
          {
            val: "e",
            children: []
          }
        ]
      },
      {
        val: "c",
        children: [
          {
            val: "f",
            children: []
          },
          {
            val: "g",
            children: []
          }
        ]
      }
    ]
  };
  expect(bfsToString(tree)).toBe("[a, b, c, d, e, f, g]");
})