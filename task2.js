/* Task 2 */

function fib(n) {

    if(n === 0)return 0;
    if(n === 1 || n === 2 || n=== -1)return 1;
    if(n === -2)return -1;

    var a = 1;
    var b = 1;
    var nAbs = Math.abs(n)
    for (var i = 3; i <= nAbs; i++) {
      var c = a + b;
      a = b;
      b = c;
    }
    return n < 0 ? Math.pow(-1,n+1)*b : b;
}

function isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
  }

var args = process.argv.slice(1);
var n = args[0];

if(!isNumeric(n)){
    process.stdout.write("please, enter integer number");
    process.exit();    
}

if(Math.abs(n) > 10000){
    process.stdout.write("number should be in range from -10000 to 10000");
    process.exit();
}

var fnum = fib(parseInt(n));

process.stdout.write(fnum.toString());
