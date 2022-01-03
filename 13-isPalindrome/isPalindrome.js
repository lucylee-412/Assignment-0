function isPalindrome(word) {
  if (word.length == 1) {
    return true;
  }

  let test = word;
  let index = 0;
  while (test.length != 1) {
    if (test.charAt(index) == test.charAt(test.length - 1)) {
      // If we have reached the middle two characters, this is a palindrome
      if (test.length == 2) {
          return true;
      } else {
          // Continue to trim off the first and last letter
          test = test.substring(index + 1, test.length - 1);
      }
    } else {
      // This is not a palindrome
      return false;
    }
  }

  // We have reached the middlemost character; this is a palindrome
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;