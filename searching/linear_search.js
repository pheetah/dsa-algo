function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([34,51,1,2,3,45,56,687], 45));

// linear search is a good algorithm for unsorted arrays, 
// it just looks at every item in the list if it exists, returns index, if not, returns -1
// for sorted arrays -> use binary search
// In Javascript  findIndex, indexOf, find methods use linear search
// BIG O: O(n)

// BIG O : best -> O(1), worst -> O(n), average -> O(n)