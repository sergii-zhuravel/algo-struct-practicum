class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  addNode(value) {
    if (value <= this.value && this.left) {
      this.left.addNode(value);
    } else if (value <= this.value) {
      this.left = new BinarySearchTree(value);
    } else if (value > this.value && this.right) {
      this.right.addNode(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
  findNode(value) {
    if (value < this.value && this.left) {
      return this.left.findNode(value);
    }
    if (value > this.value && this.right) {
      return this.right.findNode(value);
    }
    return value == this.value;
  }
  inOrder() {
    if (this.left) {
      this.left.inOrder();
    }
    console.log(this.value);
    if (this.right) {
      this.right.inOrder();
    }
  }
  preOrder() {
    console.log(this.value);
    if (this.left) {
      this.left.preOrder();
    }
    if (this.right) {
      this.right.preOrder();
    }
  }

  postOrder() {
    if (this.left) {
      this.left.postOrder();
    }
    if (this.right) {
      this.right.postOrder();
    }
    console.log(this.value);
  }
  bfs() {
    const queue = [];
    queue.push(this);
    while (queue.length) {
      let currentNode = queue.pop();
      console.log(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
}
