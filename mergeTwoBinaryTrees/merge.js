/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
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


function TreeNode(value){
	this.value = value;
	this.right = null;
	this.left = null;
}

TreeNode.prototype.add = function(value){
	if(value > this.value){
		if(!this.right){
			this.right = new TreeNode(value);
		} else {
			this.right.add(value)
		}
	} else {
		if(!this.left){
			this.left = new TreeNode(value);
		} else {
			this.left.add(value)
		}	
	}
}


var mergeTrees = function(t1, t2, result = new TreeNode(t1.value + t2.value)) {
	if(t1 && t1.right && !t2){
		result.right = new TreeNode(t1.right.value);
		mergeTrees(t1.right, null, result.right);
	}
	if(t1 && t1.right && t2 && !t2.right){
		result.right = new TreeNode(t1.right.value);
		mergeTrees(t1.right, null, result.right);
	}
	if(t2 && t2.right && !t1){
		result.right = new TreeNode(t2.right.value);
		mergeTrees(t1.right, null, result.right);
	}
	if(t2 && t2.right && t1 && !t1.right){
		result.right = new TreeNode(t2.right.value);
		mergeTrees(t1.right, null, result.right);
	}
	if(t2 && t2.right && t1 && t1.right){
		result.right = new TreeNode(t1.right.value + t2.right.value);
		mergeTrees(t1.right, t2.right, result.right);
	}

	if(t1 && t1.left && !t2){
		result.left = new TreeNode(t1.left.value);
		mergeTrees(t1.left, null, result.left);
	}
	if(t1 && t1.left && t2 && !t2.left){
		result.left = new TreeNode(t1.left.value);
		mergeTrees(t1.left, null, result.left);
	}
	if(t2 && t2.left && !t1){
		result.left = new TreeNode(t2.left.value);
		mergeTrees(null, t2.left, result.left);
	}
	if(t2 && t2.left && t1 && !t1.left){
		result.left = new TreeNode(t2.left.value);
		mergeTrees(null, t2.left, result.left);
	}
	if(t2 && t1 && t2.left && t1.left){
		result.left = new TreeNode(t1.left.value + t2.left.value);
		mergeTrees(t1.left, t2.left, result.left);
	}
	return result;
};
