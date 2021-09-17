function makeTable(str) {
  
    
    var table = new Array(str.length);
    var maxPrefix = 0;
    
    table[0] = 0;
  
    
    for (var i = 1; i < str.length; i++) {
      while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
        
        maxPrefix = table[maxPrefix - 1];
      }
      
      if (str.charAt(maxPrefix) === str.charAt(i)) {
        maxPrefix++;
      }
      table[i] = maxPrefix;
    }
    return table;
}
  
function kmpMatching(str, word){
   
    var prefixes = makeTable(word);
    
    var errorCount = 0;
    
    var j = 0;
    var i = 0;

    while (i < str.length) {
      console.log(i, "count", errorCount, "errorCount")

      if( (i > 3) && (i <= 6) && (errorCount <= 1) ){
        return true;
      }else if( (i > 6) && (i < 8) && (errorCount <= 2) ){
        return true;
      }

      if (str.charAt(i) === word.charAt(j)) {
        i++;
        j++;
      }
      
      if (j === word.length) {
        return true;
      }
      
      else if (str.charAt(i) !== word.charAt(j)) {
        
        errorCount++;
        
        if (j !== 0) {
            j = prefixes[j-1];
        }else{
            i++;
        }
    
      }
 
    }
  
    return false;

}