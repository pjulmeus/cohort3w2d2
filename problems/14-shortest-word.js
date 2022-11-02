/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {
  let word = sentence.split(" ");
  let shortWord= 100;
  let shortestWord = ' ';
  word.forEach(el => {
    //console.log(el);
    //if(el === " "){
      //arr.push(el);
    //}
        if(el.length <= shortWord){
        shortWord = el.length
        console.log(shortWord)
        shortestWord = el;
    }

  });
 return shortestWord
};
console.log(shortestWord('do what you enjoy'));
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
