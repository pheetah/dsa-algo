function bubbleSort(array){

    let inner_cycle_count = array.length;
    let sorted_array = [];

    for(k = 0; k < inner_cycle_count; k++){
        for(i = 0; i < array.length; i++){
            let temp;
            if(array[i] > array[i+1]){
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }else{
                continue;
            }

        }

        sorted_array.push(array.pop());
    }

    return sorted_array;
}

console.log(bubbleSort([21,345,123,64,58, 123421, 1234]));