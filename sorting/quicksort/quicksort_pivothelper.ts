function qsort(array:Array<any>){

  let last_sorted = 1;

  for(let i = 2; i < array.length; i++){
      if(array[i] < array[0]){
          [array[i], array[last_sorted]] = [array[last_sorted], array[i]];
          last_sorted ++;
      }
  }
  
  //console.log(array);
  return last_sorted;
}


console.log(qsort([5,62,21,56,878,2,234, 3, 4, 65]));