'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function add(x) {
    if (x === undefined) {
      const zero = result;

      result = 0;

      return zero;
    }
    result += x;

    return add;
  };
}

module.exports = makeInfinityAdder;
