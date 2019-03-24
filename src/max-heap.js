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


	 if(!this.root) {
	     this.root = node;
	 } else {
         this.root.appendChild(node);
     }

	}

	pop() {
		this.root = null;
	}

	detachRoot() {
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
        return (this.root===null);
	}

	clear() {
		
	}

	insertNode(node) {
	    if(!this.root) {
            this.root = node;
        }
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
