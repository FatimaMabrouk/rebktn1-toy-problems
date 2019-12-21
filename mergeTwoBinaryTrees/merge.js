/*
Given two binary trees and imagine that when you put one of them to cover the other
	some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap,
	then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

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
	
	//create a new tree with root set to val + val2...(left, righ === null)
	var newTree = new TreeNode(t1.val + t2.val);

	var function populateLeft(merged, t1, t2) { //ignores child.right!!!
		//break case
		if( (!t1.left  && !t2.left) ) return null;
		merged.left = new TreeNode(t1.left + t2.left);
		populateLeft(merged.left, t1.left, t2.left);
	}
	var function populateRight(merged, t1, t2) {//ignores child.left
		//break case
		if( (!t1.rigth  && !t2.right) ) return null;
		merged.righ = new TreeNode(t1.righ + t2.right);
		populateRight(merged.right, t1.right, t2.right);
	}
	populateLeft(newTree, t1, t2);
	populateRight(newTree, t1, t2);

	return newTree;
};


////////////////////REFACTORED////////////////

var mergeTrees = function(t1, t2) {
	
	//create a new tree with root set to val + val2...(left, righ === null)
	var newTree = new TreeNode(t1.val + t2.val);

	var function populate( merged, t1, t2 ) {

		if( (!t1.left  && !t2.left) && (!t1.right  && !t2.right)) return null;

		merged.left = new TreeNode(t1.left + t2.left);
		merged.right = new TreeNode(t1.right + t2.right);


		populate( merged.left, t1.left, t2.left );  //refactor these two recursive calls !!
		populate( merged.right, t1.right, t2.right );
	}
	populate( newTree, t1, t2 );

	return newTree;
};

