// 1. Reverse a string
// - Return a string in reverse
// ex. reverseString('hello') === 'olleh'

const reverseString = str => {
  return str
    .split('')
    .reverse()
    .join('');
};
