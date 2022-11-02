/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
     let eCounter = 0;
     let arr = [];
     let arr2= [];
      let letter = string.split("");
      //console.log(letter)
    let vowels = 'aeiou';
    letter.filter((el) => {
//console.log(el);
    if(vowels.includes(el)){
        arr.push(el);
//console.log(arr);
 }
 });

 for(let i = 0; i < arr.length; i++){
    let lets = arr[i];
    //console.log(lets);
    if(!arr2.includes(lets)){
        arr2.push(lets);
        eCounter++;
    }
    console.log(eCounter);
 }

 if(eCounter >= 3){
        return true;
    }else{
    return false;
}

}

console.log(hasThreeVowels('delicious'));
console.log(hasThreeVowels('go home'));
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
