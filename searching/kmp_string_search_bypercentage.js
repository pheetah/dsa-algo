/*


-----
UNDER DEVELOPMENT
-----


*/






// function makeTable(str) {
  
    
//     var table = new Array(str.length);
//     var maxPrefix = 0;
    
//     table[0] = 0;
  
    
//     for (var i = 1; i < str.length; i++) {
//       while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
        
//         maxPrefix = table[maxPrefix - 1];
//       }
      
//       if (str.charAt(maxPrefix) === str.charAt(i)) {
//         maxPrefix++;
//       }
//       table[i] = maxPrefix;
//     }
//     return table;
// }
  
// function kmpMatching(str, word){
   
//     var prefixes = makeTable(word);
//     var matches = [];
//     var errorCount = 0;
//     var matched = 0;
//     var iterated = 0;
    
//     var percentage;

//     var j = 0;
//     var i = 0;
//     while (i < str.length) {
        
      
//       if (str.charAt(i) === word.charAt(j)) {
//         console.log('matches', str.charAt(i), word.charAt(j))
//         i++;
//         j++;
//         matched++;
//         iterated++;
//       }
      
//       if (j === word.length) {
//         return true;
//       }
      
//       else if (str.charAt(i) !== word.charAt(j)) {
//           errorCount++;
          
//           console.log('doesnt matches', str.charAt(i), word.charAt(j))


//           if(errorCount < 2){
//             i++;
//             j++;
//             iterated++;
//           }else{
//             if (j !== 0) {
//                 j = prefixes[j-1];
//             }else{   
//                 i++;
//                 iterated++;
//             }
//           }

//       }

//       console.log(matched/iterated * 100);
//     }
  
//     return percentage;
//   }