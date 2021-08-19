const { bfsToString } = require("../src/003 树的深度优先遍历");

test("测试为空的情况", () => {
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
  expect(bfsToString(tree)).toBe("[a, b, d, e, c, f, g]");
});