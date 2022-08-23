/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var result = []; 
  var carry = 0;
    
  for (var lenA = a.length - 1, lenB = b.length - 1;
        lenA >= 0 || lenB >= 0 || carry > 0;
        lenA--, lenB--) 
    {
        var sum = carry + 
                  (lenA >= 0 ? a[lenA]-'0' : 0) +
                  (lenB >= 0 ? b[lenB]-'0' : 0);
        
        result = (sum % 2) + result
        carry = parseInt(sum/2)
    }
    
    return result.toString()  
};