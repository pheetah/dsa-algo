class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return this;
        }

        let current = this.root;
        
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }else{
                    current = current.left;
                }
            }else if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }else{
                    current = current.right;
                }
            }
        }

    }

    find(value){

        if(this.root === null){
            return undefined;
        }

        let current = this.root;
        
        while(true){
            if(value === current.value) return true;
            if(value < current.value){
                if(current.left === null){
                    return false;
                }else{
                    current = current.left;
                }
            }else if(value > current.value){
                if(current.right === null){
                    return false;
                }else{
                    current = current.right;
                }
            }
        }

    }

    PreOrder(){
        let visited = [];
        let node = this.root;
        this.preOrderHelper(node, visited);
        return visited;
    }

    preOrderHelper(node, visited){
        visited.push(node.value);
        
        if(node.left){
            this.preOrderHelper(node.left, visited);
        }
        if(node.right){
            this.preOrderHelper(node.right, visited);
        }

        return;
    }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);