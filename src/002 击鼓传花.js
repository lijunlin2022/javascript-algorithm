const { Queue } = require("./lib/Queue");

const passFlowers = function(names, num) {
  const queue = new Queue();
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return queue.front();
}

module.exports = {
  passFlowers
};
