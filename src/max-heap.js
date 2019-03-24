const Node = require('./node');

/**
 * Биномиальная куча
 */
class MaxHeap {
	constructor() {
		this.root  = null;
		this.parentNodes = [];
	}

	/**
	 *
	 * @param {Number} data
	 * @param {Number} priority
	 */
	push(data, priority) {
	 const node = new Node(data, priority);

	 if(this.root) {
	 	this.root.appendChild(node);
	 }

	}

	pop() {
		
	}

	detachRoot() {
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
