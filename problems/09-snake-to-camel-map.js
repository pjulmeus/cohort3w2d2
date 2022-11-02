/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/

const snakeToCamel= (str) =>  {
    if(!Array.isArray(str)){
        let cool = [str];

    let newStr = cool.map((el) =>{
      if(el[0]){
       return el[0].toUpperCase();
      }
      if(el === '_'){
        return el[i+1].toUppercase();
      }
      return el.toLowerCase();

    });
    return newStr;
}

}
console.log(snakeToCamel('APp_ACADEMY_iS_cOol'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
