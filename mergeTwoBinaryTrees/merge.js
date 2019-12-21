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
 */function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }


/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2,element = new TreeNode(t1.value + t2.value)) {


	if(t1.left &&t2.left) {
		element.left =new TreeNode(t1.left.value + t2.left.value)
	}
	if(t1.left &&!t2.left) {
		element.left =new TreeNode(t1.left.value )
	}
	if(!t1.left &&t2.left) {
		element.left =new TreeNode(t2.left.value)
	}

	var mergedTree = new TreeNode(t1.value+t2.value)
 function mergeObj(obj1,obj2) {
 	 var mergedObjs= new Tree(obj1.value + obj2.value)
 	var lValue1 = obj1.left.value ||0
 	var lValue2 = obj2.left.value ||0
 	var rValue1 = obj1.right.value ||0
 	var rValue2 = obj2.right.value ||0
 	if(obj1.left || obj2.left){
 		element.left = new TreeNode(lValue1 + lValue2)
 	}
 	if(obj1.right || obj2.right){
 		element.right = new TreeNode(rValue1 + rValue2)
 	}


 }

	var mergedTree = new TreeNode(t1.value+t2.value)
	element =  element ||mergedTree
	
	var val1 = t1.left.value ||0
	var val1 = t2.left.value ||0
	if(t1.left||t2.left) {
		mergeTrees(t1.left,t2.left,)

};
