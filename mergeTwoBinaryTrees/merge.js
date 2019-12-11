/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1              Tree 2                  
          1                  2                             
         / \                / \                            
        3   2              1   3                        
       /                    \   \                      
      5                      4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 TreeNode.prototype.addChild = function(child) {
  if (!child || !(child instanceof TreeNode)) {
    child = new TreeNode(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
TreeNode.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
TreeNode.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
var mergeTrees = function(t1, t2) {
	var newTree = newTree || new TreeNode(0);
	if (t1.value === null || t2.value === null) {
		t1 === t1 || 0;
		t2 === t2 || 0;
	}
	newTree = t1.value + t2.value;

	for (var i = 0; i < t1.children.length || i < t2.children.length; i++) {
		if (t1.children[i].mergeTrees(t1.children[i],t2.children[i]) || t2.children.mergeTrees(t1.children[i],t2.children[i])) {
			newTree.addChild(t1.children.value + t2.children.value);
		}
	}
	return newTree;
};


