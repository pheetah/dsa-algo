class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let node = new Node(value);            

        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            var prevTail = this.tail;
            prevTail.next = node;
            node.prev = prevTail;
            this.tail = node; 
        }

        this.length++;
    }

    pop(){
        if(this.length === 0){
            return undefined;
        }else if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            let newNode = this.tail.prev;
            newNode.next = null;
            this.tail.prev = null;
            this.tail = newNode;
        }

        this.length--;
    }

    shift(){
        if(this.length === 0){
            return undefined;
        }if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        let newHead = this.head.next;
        newHead.prev = null;
        this.head.next = null;
        let OldHead = this.head;
        this.head = newHead;

        this.length--;

        return OldHead;
    }

    unshift(value){
        let newNode = new Node(value);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }

        let oldHead = this.head;
        newNode.next = oldHead;
        oldHead.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    get(index){
        if(this.length === 0){
            return null;
        }else if(index >= this.length){
            return null;
        }else{
            if(index <= this.length/2){
                let node = this.head;
                for(let i=0; i < index; i++){
                    node = node.next;
                }
                return node;
            }else if(index > this.length/2){
                let node = this.tail;
                for(let i=0; i < this.length-index-1; i++){
                    node = node.prev;
                }
                return node;
            }
        }
    }

    set(index, value){
        let node = this.get(index);
        
        if(node.val !== null){
            node.val= value;
        }
    }

    insert(index, value){

        //some index checks missing here

        let nextNode = this.get(index);
        let prevNode = nextNode.prev;
        let newNode = new Node(value);

        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;

        return true;
    }

    remove(index){

        //some index checks missing here

        let node = this.get(index);

        let prevNode = node.prev;
        let nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        node = null;

        this.length--;
    }
}

list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);