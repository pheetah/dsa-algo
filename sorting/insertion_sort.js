function insertionSort(array){
    

    for(i = 0; i < array.length; i++){
        let currentValue = array[i];
        for(j = i - 1; j >= 0; j--){
            if(array[j] > currentValue){
                array[j+1] = array[j];
            }else{
                array[j+1] = currentValue;
                break;
            }
        }
    }

    return array;

}

console.log(insertionSort([2,1,9,76,4]));

// lecturer's code!!!
// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])