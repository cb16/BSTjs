BST = function() {
	var Node = function(leftChild, value, rightChild) {
		return {
			leftChild: (typeof leftChild === "undefined") ? null : leftChild,
			value: (typeof value === "number") ? value : null,
			rightChild: (typeof rightChild === "undefined") ? null : rightChild
		};
	},
	root = new Node(),
	insertNode = function(node, value) {
		if(node.value === null) {
			node.leftChild = new Node();
			node.rightChild = new Node();
			node.value = value;
			return true;
		}
		var nodeValue = parseInt(node.value, 10);
		if(value <= nodeValue) {
			return insertNode(node.leftChild, value);
		} else {
			return insertNode(node.rightChild, value);
		}
	},
	inorder = function(node){
		if(node.value === null) {
			return "";
		} else {
			var word = "";
			word = word.concat(inorder(node.leftChild));
			//console.log(node.value);
			word = word.concat(node.value + " ");
			//something
			word = word.concat(inorder(node.rightChild));
			return word;
		}
	},
	preorder = function(node){
		if(node.value === null) {
			return "";
		} else {
			var word = "";
			word = word.concat(node.value + " ");
			word = word.concat(preorder(node.leftChild));
			word = word.concat(preorder(node.rightChild));
			return word;
		}
	},
	posorder = function(node){
		if(node.value === null) {
			return "";
		} else {
			var word = "";
			word = word.concat(posorder(node.leftChild));
			word = word.concat(posorder(node.rightChild));
			word = word.concat(node.value + " ");
			return word;
		}
	},
	clearBST = function(node){
		root.value = null;
		return true;
	};
	return {
		insert: function(value) {
			var val = parseInt(value, 10);
			if(isNaN(val)) {
				return undefined;
			} else {
				return insertNode(root, val);	
			}
		},
		emordem: function() {
			return inorder(root);
		},
		preordem: function() {
			return preorder(root);
		},
		posordem: function() {
			return posorder(root);
		},
		clearBst: function() {
			return clearBST(root);
		}
	}
	
}

var myBST = new BST();

function insert() {
	var domNode = document.getElementById("testing");
	domNode.innerHTML='';
	var v = document.getElementById("value").value;
	var did = myBST.insert(v);
	if(did === true) {
		domNode.appendChild(document.createTextNode("Inseriu " + v));
	} else {
		domNode.appendChild(document.createTextNode("Operação inválida!"));
	}
	return did;
}

function emordem() {
	var domNode = document.getElementById("testing");
	domNode.innerHTML='';
	var nodes = myBST.emordem();
	document.getElementById("testing").appendChild(document.createTextNode(nodes));
}

function preordem() {
	var domNode = document.getElementById("testing");
	domNode.innerHTML='';
	var nodes = myBST.preordem();
	domNode.appendChild(document.createTextNode(nodes));
}

function posordem() {
	var domNode = document.getElementById("testing");
	domNode.innerHTML='';
	var nodes = myBST.posordem();
	domNode.appendChild(document.createTextNode(nodes));
}

function clearBst() {
	var domNode = document.getElementById("testing");
	domNode.innerHTML='';
	var result = myBST.clearBst();
	if(result === true) {
		domNode.appendChild(document.createTextNode("A BST está vazia!"));
	} else {
		domNode.appendChild(document.createTextNode("Houve algum problema!"));
	}
	
}