/* Task 3 */

/*
Разделить входную строку длины n на 3: глассные a, согласные b, цифры c.
На вход подается строка в формате ASCII. 1 <= n <= 10000

Пример входного файла
> node task.js 'Hello World!'
> eoo HllWrld
*/

// const args = process.argv.slice(1); // for geekbrains
const args = process.argv.slice(2); // for standard node.js env

const str = args[0];

const vowels = [];
const consonants = [];
const digits = [];

if (!str) {
    // process.stdout.write("pass one ASCII string");
    process.exit();
}

if (str.length > 10000 || str.length < 1) {
    // process.stdout.write("string must contain from 1 to 10000 characters");
    process.exit();
}

if (!/^[\x00-\x7F]*$/.test(str)) {
    // process.stdout.write("string must contain only ASCII characters");
    process.exit();
}

str.split("").forEach(char => {
    if (/[aeiou]/i.test(char)) vowels.push(char);
    if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) consonants.push(char);
    if (/[\d]/i.test(char)) digits.push(char);
});

const res = [];
if(vowels.length > 0)res.push(vowels.join(""))
if(consonants.length > 0)res.push(consonants.join(""))
if(digits.length > 0)res.push(digits.join(""))

console.log(res.join(" "))
// process.stdout.write(vowels.join("") + " " + consonants.join("") + " " + digits.join(""));
