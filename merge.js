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


function TreeNode(val) {    this.val = val;
      this.left = this.right = null;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */



var mergeTrees = function(t1, t2) {

  function traverse(){

    t1.val += t2.val

    if (t1.left && t2.left){
      travese(t1.left, t2.left)
    }

    if (t1.right && t2.right){
      travese(t1.right, t2.right)
    }

    if (!t1.right){
      if (t2.right){
        let right = new TreeNode(t2.right.val)
        t1.right =  right
        return right
      }
    }

    if (!t1.left){
      if (t2.left){
        let left = new TreeNode(t2.left.val)
        t1.left = left
        return left
      }
    }

    //make it not stop and recurse traversal

    traverse(t1.left,t2.right)
  }

  traverse(t1,t2)

  return t1
};
