/* Task 3 */

const args = process.argv.slice(1);
const str = args[0];

const vowels = [];
const consonants = [];
const digits = [];

if(!str){
    process.stdout.write("pass one ASCII string");
    process.exit();
}

if(str.length > 10000 || str.length < 1){
    process.stdout.write("string must contain from 1 to 10000 characters");
    process.exit();
}

if(!/^[\x00-\x7F]*$/.test(str)){
    process.stdout.write("string must contain only ASCII characters");
    process.exit();
}

str.split("").forEach(char => {
    if(/[aeiou]/i.test(char))vowels.push(char);
    if(/[bcdfghjklmnpqrstvwxyz]/i.test(char))consonants.push(char);
    if(/[\d]/i.test(char))digits.push(char);
});

process.stdout.write(vowels.join("") + " " + consonants.join("") + " " + digits.join(""));
