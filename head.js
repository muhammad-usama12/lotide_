const assertEqual = require('./assertEqual');

const head = function (arr) {
  if (arr) {
    return arr.shift();
  }
};

module.exports = head;