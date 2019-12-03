/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

 //pseudoCode
 //0 deividing the array into to halfs for insertion.
 //1 adding the array elements into the tree as a nodes
 //2 

var binarySearch = function (array, target) {
	var i = 0
	var	midIdx = Math.round(array.length - 1 / 2);
	var j = midIdx + 1;
	var root  = this.addNode(array[midIdx]);

	this.right = null;
	this.left = null;
	this.index = null;
	root.addNode()
};


binarySearch.prototype.addNode = function(value,index) {
	if (!this.left ) {
		if (this.value > value) {
			this.index = index
		return	this.left = new binarySearch(value,index)
		}
	}
	if (!this.right ) {
		if (this.value < value) {
			return	this.right = new binarySearch(value) 
			}
	}
};

binarySearch.prototype.contains(target) {
	if (this.value === target) {
		return true;
	}
	if ( target > this.value) {
		return this.right.contains;
	}
	if ( target < this.value) {
		return this.left.contains;
		}
	if (this.contains) {
		return ;
	}
}