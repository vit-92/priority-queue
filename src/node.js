class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
      this.left = node;
      node.parent = this;
	}

	removeChild(node) {
       this.left = null;
	}

	remove() {
       this.parent = null;
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
