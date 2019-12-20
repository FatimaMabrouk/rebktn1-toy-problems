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

<<<<<<< HEAD
class TreeNode{
	constructor(val){	
      this.val = val;
      this.left = this.right = null;
   }	
  insert(val) {
  if (val < this.val) {
    if (this.left === null) {
      this.left = new TreeNode(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.val) {
    if (this.right === null) {
      this.right = new TreeNode(val);
    } else {
      this.right.insert(val);
    }
  }
 }
}

 

var mergeTrees = function(t1, t2, newTree = new TreeNode) {
	// create w new node for every sum of the two nodes of the input
	 newTree.val =  (this.val + t2.val);
	 console.log(t2.val)
		 mergeTrees(this.left, t2.left, newTree.left)
		 mergeTrees(this.right, t2.right, newTree.right)
	return newTree;		 
	}
	
var root1 = new TreeNode(5)
root1.insert(6);
root1.insert(4)

var root2 = new TreeNode(3)
root2.insert(2)
root2.insert(7)

=======
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
var mergeTrees = function(t1, t2) {};
>>>>>>> 632900277eef9939715ba7b58d49cca1b3253a86
