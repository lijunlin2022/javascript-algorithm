const { Stack } = require("./lib/Stack");

/**
 * 十进制转二进制
 * @param {Number} n 
 * @returns {String}
 */
const dec2bin = function (decNum) {
  if (decNum === 0) {
    return "0";
  }
  const stack = new Stack();
  while (decNum > 0) {
    stack.push(decNum % 2);
    decNum = Math.floor(decNum / 2);
  }
  const arr = [];
  while (stack.isEmpty() === false) {
    arr.push(stack.pop());
  }
  return arr.join("");
}

module.exports = {
  dec2bin
};
