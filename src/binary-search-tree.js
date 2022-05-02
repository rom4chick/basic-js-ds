const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  leftChild = null;
  rightChild = null;

  data

  constructor(data) {
    this.data = data 
  }
}

class BinarySearchTree {
  rootNode = null;

  getSuccessorNode(node) {
    let successorParent = node;
    let successor = node;
    let current = node.rightChild;

    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.leftChild;
    }

    if (successor !== node.rightChild) {
      successorParent.leftChild = successor.rightChild;
      successor.rightChild = node.rightChild;
    }
    return successor;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      let current = this.rootNode;
      let insertNode;

        while(true) {
          insertNode = current;

          if (data < current.data) {
            current = current.leftChild;
            if (current === null) {
              insertNode.leftChild = new Node(data);
              break;
            }
          } else if (data >= current.data) {
            current = current.rightChild;
            if (current === null) {
              insertNode.rightChild = new Node(data);
              break;
            }
          }
        }
    }
  }

  has(data) {
    let current = this.rootNode;

    while (current.data != data) {
      if (current.data <= data) {
        current = current.rightChild;
      } else {
        current = current.leftChild;
      }

      if (current === null) {
        return false;
      }
    }
    if (current.data !== null)
      return true
    return false
  }

  find(data) {
    let current = this.rootNode;

    while (current.data != data) {
      if (current.data <= data) {
        current = current.rightChild;
      } else {
        current = current.leftChild;
      }

      if (current === null) {
        return null;
      }
    }
    return current
  }

  remove(data) {
   let current = this.rootNode;
   let parent = this.rootNode;
   let isLeftChild = true;

   if (current  !== null) {
      while (current.data !== data) {
        parent = current;
        if (data < current.data) {
          isLeftChild = true;
          current = current.leftChild;
        } else {
          isLeftChild = false;
          current = current.rightChild;
        }
        if (current === null) {
          return;
        }
     }
     
     if (current.leftChild === null && current.rightChild === null) {
       if (current === this.rootNode) {
          this.rootNode = null;
       } else if (isLeftChild) {
          parent.leftChild = null;
       } else { 
          parent.rightChild = null;
       }
     } else if (current.rightChild === null) {
       if (current === this.rootNode) {
          this.rootNode = current.leftChild
       } else if (isLeftChild) {
          parent.leftChild = current.leftChild;
       } else {
         parent.rightChild = current.leftChild;
       }
     } else if (current.leftChild === null) {
        if (current === this.rootNode) {
          this.rootNode = current.rightChild;
        } else if (isLeftChild) {
          parent.leftChild = current.rightChild;
        } else {
          parent.rightChild = current.rightChild
        }
     } else {
       let successor = this.getSuccessorNode(current);

       if (current === this.rootNode) {
         this.rootNode = successor;
       } else if (isLeftChild) {
         parent.leftChild = successor;
       } else {
         parent.rightChild = successor;
       }

       successor.leftChild = current.leftChild;
     }
   }
  }

  min() {
    let current = this.rootNode;

    if (current === null) {
      return null;
    }

    while (current !== null) {
      if (current.leftChild !== null) {
        current = current.leftChild;
      } else {
        return current.data
      }
    }
  }

  max() {
    let current = this.rootNode;

    if (current === null) {
      return null;
    }

    while (current !== null) {
      if (current.rightChild !== null) {
        current = current.rightChild;
      } else {
        return current.data
      }
    }
  }
}

tree = new BinarySearchTree();
tree.add(1)
tree.add(2)
console.log(tree.min())

module.exports = {
  BinarySearchTree
};