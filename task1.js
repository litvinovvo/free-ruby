
const str = process.argv[1];

const strClean = str.replace(/\W/gi, '').toLowerCase();
const strReverse = strClean.split("").reverse().join("");
strClean === strReverse ? process.stdout.write("YES") : process.stdout.write("NO");
