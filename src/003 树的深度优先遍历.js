const bfs = (v, handler) => {
  if (Object.keys(v).length !== 0) {
    handler(v.val);
    v.children.forEach(item => {
      bfs(item, handler);
    });
  }
};

const bfsToString = (initV) => {
  const arr = [];
  bfs(initV, item => {
    arr.push(item);
  });
  return "[" + arr.join(", ") + "]";
}

module.exports = {
  bfsToString
};
