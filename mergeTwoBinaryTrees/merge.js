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



var mergeTrees = function(t1, t2) {
	var outPut = new TreeNode(t1.val + t2.val);
	//this block treats the left side
	if(t1.left !== null && t2.left !== null) {
		var newLeft = new TreeNode(t1.left.val + t2.left.val);
		outPut.left = newLeft
	} else if(t1.left !== null && t2.left === null) {
		var newLeft = new TreeNode(t1.left.val);
		outPut.left = newLeft
	} else if(t1.left === null && t2.left !== null) {
		var newLeft = new TreeNode(t2.left.val);
		outPut.left = newLeft
	}
	//this block treats the right side
	if(t1.right !== null && t2.right !== null) {
		var newRight = new TreeNode(t1.right.val + t2.right.val);
		outPut.right = newRight
	} else if(t1.right !== null && t2.right === null) {
		var newRight = new TreeNode(t1.right.val);
		outPut.right = newRight
	} else if(t1.right === null && t2.right !== null) {
		var newRight = new TreeNode(t2.right.val);
		outPut.right = newRight
	}
	//stopping condition for the recursion
	if(outPut.left === null && outPut.right === null) {
		return outPut
	}
	//recursion over left and right sides
	if(outPut.left !== null){
		return mergeTrees(t1.left, t2.left)
	}
	if(outPut.right !== null){
		return mergeTrees(t1.right, t2.right)
	}

}

// var mergeTrees = function(t1, t2) {
// 	var outPut = new TreeNode(t1.val + t2.val);

// 	for (;t1.left !== null || t2.left !== null; t1=t1.left,t2=t2.left) {
// 		if(t1.left !== null && t2.left !== null) {
// 			var newLeft = new TreeNode(t1.left.val + t2.left.val);
// 			outPut.left = newLeft
// 		} else if(t1.left !== null && t2.left === null) {
// 			var newLeft = new TreeNode(t1.left.val);
// 			outPut.left = newLeft
// 		} else if(t1.left === null && t2.left !== null) {
// 			var newLeft = new TreeNode(t2.left.val);
// 			outPut.left = newLeft
// 		}
// 	}

// 	for (;t1.right !== null || t2.right !== null; t1=t1.right,t2=t2.right) {
// 		if(t1.right !== null && t2.right !== null) {
// 			var newRight = new TreeNode(t1.right.val + t2.right.val);
// 			outPut.right = newRight
// 		} else if(t1.right !== null && t2.right === null) {
// 			var newRight = new TreeNode(t1.right.val);
// 			outPut.right = newRight
// 		} else if(t1.right === null && t2.right !== null) {
// 			var newRight = new TreeNode(t2.right.val);
// 			outPut.right = newRight
// 		}
// 	}

// 	return outPut
// };
