/* Task 1 */

const args = process.argv.slice(2);
const str = args[0];

// console.log()
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


const strClean = str.replace(/\W/gi,'').toLowerCase();
const strReverse = strClean.split("").reverse().join("");
strClean === strReverse ? process.stdout.write("YES") : process.stdout.write("NO");
