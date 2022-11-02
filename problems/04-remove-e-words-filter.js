/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

const removeEWords = (sentence) => {
  let words = sentence.split(" ");
   let removal = words.filter((el) => {
      if(el.includes('e')|| el.includes('E')){
        return false;
      }
        return true;
    });
    return removal.join(" ");
};
console.log(removeEWords('What time is it everyone?'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
