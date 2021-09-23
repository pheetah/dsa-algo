class BinaryHeap{
    
    constructor(){
        this.values = [];
    }

    insert(newValue){
        this.values.push(newValue);

        let newNodeIndex = this.values.length - 1;
        let parentNodeIndex = Math.floor((newNodeIndex-1) / 2);

        while(this.values[newNodeIndex] > this.values[parentNodeIndex]){
            this.bubbleUp(newNodeIndex, parentNodeIndex);

            newNodeIndex = parentNodeIndex;
            parentNodeIndex = Math.floor((newNodeIndex-1) / 2);
        }

        return this.values;
    }

    bubbleUp(newNodeIndex, parentNodeIndex){
        let temp = this.values[parentNodeIndex];
        this.values[parentNodeIndex] = this.values[newNodeIndex];
        this.values[newNodeIndex] = temp;
    }

    remove(){
        const removedItem = this.values[0];
        this.values.shift();

        let childToCompareIndex;

        const lastItem = this.values.pop();
        this.values.unshift(lastItem);

        let index = 0;
        let firstChild = 2*index+1;
        let secondChild = 2*index+2;

        if(this.values[firstChild] > this.values[secondChild]){
            childToCompareIndex = firstChild;
        }else{
            childToCompareIndex = secondChild;
        }

        while(this.values[index] < this.values[childToCompareIndex]){
            this.bubbleUp(index, childToCompareIndex);
            index = childToCompareIndex;
            firstChild = 2*index+1;
            secondChild = 2*index+2;
        }

        return this.values;
    }


}

let heap = new BinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
