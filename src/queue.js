const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
       this.heap = new MaxHeap();
       this.maxSize = 0;
	}

	push(data, priority) {
     this.heap.push(data, priority)
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
