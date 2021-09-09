class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;           
        }
        
        this.length++;
        return this;
    }

    // traverse(){
    //     var current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
    // basic mentality of pop

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        
        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;

        this.head = currentHead.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }

        return currentHead;
    }

    unshift(val){
        var newNode = new Node(val);

        if(this.head == null){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index){
        var returnValue = this.head;
        var i;

        for(i = 0; i < index; i++){
            returnValue = returnValue.next;
        }

        return returnValue;
    }

    set(index, value){
        var foundIndex = this.get(index);
        foundIndex.val = value;

        return foundIndex;
    }

    insert(index, value){
        var foundIndex = this.get(index - 1);
        var node = new Node(value);

        node.next = foundIndex.next;
        foundIndex.next = node;

        this.length++;
        return node;
    }

}


var list = new SinglyLinkedList();

list.push('HELLO');
list.push('HOW ARE YOU');
list.push('FINE TOO');
list.push('GOODBYE');
list.push('!');
console.log(list);