const bfs = (initV, handler) => {
  if (Object.keys(initV).length === 0) {
    return;
  }
  const queue = [initV];
  while (queue.length !== 0) {
    const v = queue.shift();
    handler(v.val);
    v.children.forEach(item => {
      queue.push(item);
    });
  }
}

const bfsToString = (initV) => {
  const arr = [];
  bfs(initV, (val) => {
    arr.push(val);
  });
  return "[" + arr.join(", ") + "]";
}

module.exports = {
  bfsToString
}