/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0 || s == null)
    return true
    
  if (s.length === 2 && isNumber(s[0]) && isLetter(s[1]))
    return false

  let left = 0
  let right = s.length - 1
  s = s.toLowerCase()
  
  while (left < right) { 
    if (!isLetter(s[left]) && !isNumber(s[left])) {
      left++
      continue
    }

    if (!isLetter(s[right]) && !isNumber(s[right])) {
      right--
      continue
    }
     
    if (s[left] === s[right]) {
      left++
      right--      
      continue
    }      
      
    if (s[left] != s[right]) {
      return false
    }
  }

  return true
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase()
}

function isNumber(c) {
    return !isNaN(c) && Number.isInteger(parseFloat(c))
}