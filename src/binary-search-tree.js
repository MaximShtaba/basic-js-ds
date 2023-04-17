const { NotImplementedError } = require('../extensions/index.js');


class Node {
	constructor(data) {
	this.data = data;
	this.left = null;
	this.right = null;
	}
	}
	
	class BinarySearchTree {
	constructor() {
	this.rootNode = null;
	}
	
	root() {
	return this.rootNode;
	}
	
	add(data) {
	const node = new Node(data);
	if (!this.rootNode) {
	this.rootNode = node;
	return;
	}
	
	let current = this.rootNode;
	while (current) {
	  if (node.data < current.data) {
		 if (!current.left) {
			current.left = node;
			break;
		 }
		 current = current.left;
	  } else if (node.data > current.data) {
		 if (!current.right) {
			current.right = node;
			break;
		 }
		 current = current.right;
	  } else {
		 break;
	  }
	}
	}
	
	has(data) {
	let current = this.rootNode;
	while (current) {
	if (data === current.data) {
	return true;
	} else if (data < current.data) {
	current = current.left;
	} else {
	current = current.right;
	}
	}
	return false;
	}
	
	find(data) {
	let current = this.rootNode;
	while (current) {
	if (data === current.data) {
	return current;
	} else if (data < current.data) {
	current = current.left;
	} else {
	current = current.right;
	}
	}
	return null;
	}
	
	remove(data) {
	const removeNode = function(node, data) {
	if (!node) {
	return null;
	}
	if (data === node.data) {
	if (!node.left && !node.right) {
	return null;
	}
	if (!node.left) {
	return node.right;
	}
	if (!node.right) {
	return node.left;
	}
	let tempNode = node.right;
	while (tempNode.left) {
	tempNode = tempNode.left;
	}
	node.data = tempNode.data;
	node.right = removeNode(node.right, tempNode.data);
	return node;
	} else if (data < node.data) {
	node.left = removeNode(node.left, data);
	return node;
	} else {
	node.right = removeNode(node.right, data);
	return node;
	}
	};
	this.rootNode = removeNode(this.rootNode, data);
	}
	
	min() {
	if (!this.rootNode) {
	return null;
	}
	let current = this.rootNode;
	while (current.left) {
	current = current.left;
	}
	return current.data;
	}
	
	max() {
	if (!this.rootNode) {
	return null;
	}
	let current = this.rootNode;
	while (current.right) {
	current = current.right;
	}
	return current.data;
	}
	}

module.exports = {
  BinarySearchTree
};