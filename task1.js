/* Task 1 */

/*
Написать функцию, возвращающую YES, если входная строка является палиндромом и NO в противном случае.
На вход подается строка ASCII символов длины n. 1 <= n <= 10000

Пример
> node task.js 'Was it a car or a cat I saw?'
> YES
*/

const args = process.argv.slice(1); // for geekbrains
// const args = process.argv.slice(2); // for standard node.js env

const str = args[0];

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


const strClean = str.replace(/\W/gi, '').toLowerCase();
const strReverse = strClean.split("").reverse().join("");
strClean === strReverse ? process.stdout.write("YES") : process.stdout.write("NO");
