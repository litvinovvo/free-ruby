const str = process.argv[1];

function checkPalindrome(str){
    const strClean = str.replace(/\W/gi, '').toLowerCase();
    const strReverse = strClean.split("").reverse().join("");
    return strClean === strReverse ? "YES" : "NO";
}

process.stdout.write(checkPalindrome(str));
