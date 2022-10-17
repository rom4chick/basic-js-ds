const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.root = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  getUnderlyingList() {
    return this.root;
  }

  enqueue(item) {
    const newNode = new ListNode(item);

    if (this.isEmpty()) {
      this.root = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (this.isEmpty()) return null
    const itemToBeRemoved = this.root;

    if (this.root === this.tail) {
      this.tail = null;
    }
    this.root = this.root.next;
    this.size--;
    return itemToBeRemoved.value;
  }
}

module.exports = {
  Queue
};
