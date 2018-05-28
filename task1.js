/* Task 1 */

var args = process.argv.slice(1);
var str = args[0];

if(str.length > 10000 || str.length < 1){
    process.stdout.write("string must contain from 1 to 10000 characters");
    process.exit();
}

if(!/^[\x00-\x7F]*$/.test(str)){
    process.stdout.write("string must contain only ASCII characters");
    process.exit();
}


var strClean = str.replace(/\W/gi,'').toLowerCase();
var strReverse = strClean.split("").reverse().join("");
strClean === strReverse ? process.stdout.write("YES") : process.stdout.write("NO");
