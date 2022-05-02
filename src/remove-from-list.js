const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  let cur = list;
  while (cur.next !== null) {
    if (cur.next.value === k) {
      let tempNode = cur.next;
      cur = tempNode.next;
      break;
    }
    cur = cur.next
  }

  let listArr = [];

  while (list !== null) {
    listArr.push(list.value)
    list = list.next;
  }

  return listArr;
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

console.log(removeKFromList(convertArrayToList([3, 1, 2, 3, 4, 5]), 2))

module.exports = {
  removeKFromList
};
