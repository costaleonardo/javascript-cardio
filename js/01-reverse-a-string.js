/*

  1. Reverse a string
  - Return a string in reverse
  ex. reverseString('hello') === 'olleh'

*/

const reverseString = str => str.split('').reverse().join('');

reverseString('hello'); // === 'olleh'
