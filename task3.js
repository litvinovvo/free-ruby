/* Task 3 */

var args = process.argv.slice(2);
var str = args[0];

var vowels = [];
var consonants = [];
var digits = [];


if(str.length > 10000 || str.length < 1){
    process.stdout.write("string must contain from 1 to 10000 characters");
    return;
}

if(!/^[\x00-\x7F]*$/.test(str)){
    process.stdout.write("string must contain only ASCII characters");
    return;
}

str.split("").forEach(char => {
    if(/[aeiou]/i.test(char))vowels.push(char);
    if(/[bcdfghjklmnpqrstvwxyz]/i.test(char))consonants.push(char);
    if(/[\d]/i.test(char))digits.push(char);
});

process.stdout.write(vowels.join("") + " " + consonants.join("") + " " + digits.join(""));
