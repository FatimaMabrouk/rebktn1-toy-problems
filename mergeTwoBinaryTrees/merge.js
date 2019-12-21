/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
var t1=new TreeNode(1)
t1.left=new TreeNode(3)
t1.right=new TreeNode(2)
t1.left.left=new TreeNode(5)
t1.right=new TreeNode(2)

var t2=new TreeNode(2)
t2.left=new TreeNode(1)
t2.right=new TreeNode(3)
t2.left.right=new TreeNode(4)
t2.right.right=new TreeNode(7)
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


 //* Definition for a binary tree node.
  function TreeNode(val) {
     this.val = val;
    this.left = this.right = null;
 }


 /* @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2,tn=new TreeNode(t1.val + t2.val)) {
//var tn =  new TreeNode(t1.value + t2.value)

if(t1 === null && t2 === null)
return tn;

if(t1 === null && t2 !==null )
{tn.right = new TreeNode(t2.right.val)  ;}
else{
	 if(t2 === null && t1 !==null ){
		 tn.right = new TreeNode(t2.right.val)  ;
		}
		 else{
tn.right = new TreeNode(t1.right.val  + t2.right.val);
}
}

if(t1.left === null && t2.left !==null )
{tn.left = new TreeNode(t2.left.val)  ;}
else{
	 if(t2.left === null && t1.left !==null ){
		 tn.left = new TreeNode(t1.left.val)  ;
		}
		 else{
tn.left = new TreeNode(t1.left.val  + t2.left.val);    
}
}
mergeTrees(t1.left,t2.left,tn)
mergeTrees(t1.right,t2.right,tn)
};
