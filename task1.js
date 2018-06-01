const args = process.argv;

function checkPalindrome(str){
    const strClean = str.replace(/[\W_]/gi, '').toLowerCase();
    const strReverse = strClean.split("").reverse().join("");
    return strClean === strReverse ? "YES" : "NO";
}

if(args.length > 2)process.stdout.write(checkPalindrome(args[2]));

