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


 // * Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
TreeNode.prototype.mergeTrees = function(t1 = new TreeNode(val) , t2 = new TreeNode(val)) {
	    var t3 = new TreeNode(val);

        if(t1.val !== null && t2.val !== null){
             t3.val = t1.val + t2.val;
        }
      while(t1.left !== null && t2.left !== null && t1.right !==null && t2.right !== null){
        if(t1.left !== null && t2.left !== null){
        	t3.left = t1.left + t2.left;
        }
        if(t1.left !== null && t2.left === null){
        	t3.left = t1.left;
        }
        if(t1.left === null && t2.left !==null){
        	t3.left = t2.left;
        }
        if(t1.right !== null && t2.right !== right){
        	t3.right = t1.right + t2.right;
        }
        if(t1.right === null && t2.right !== null){
        	t3.right = t2.right;
        }
        if(t1.right !== null && t2.right === null){
        	t3.right = t1.right;
        }
    }

     return t3;
   
  
};
