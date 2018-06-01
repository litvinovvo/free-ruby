const args = process.argv;
const str = args.slice(2).join(" ");

function checkPalindrome(str){
    const strClean = str.replace(/[\W_]/gi, '').toLowerCase();
    const strReverse = strClean.split("").reverse().join("");
    return strClean === strReverse ? "YES" : "NO";
}

process.stdout.write(checkPalindrome(str));