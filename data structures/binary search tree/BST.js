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
}

let bst = new BinarySearchTree();