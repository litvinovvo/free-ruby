/* Task 2 */

function fib(n) {

    if(n === 0)return 0;
    if(n === 1 || n === 2 || n=== -1)return 1;
    if(n === -2)return -1;

    let a = 1;
    let b = 1;
    const nAbs = Math.abs(n)
    for (let i = 3; i <= nAbs; i++) {
      var c = a + b;
      a = b;
      b = c;
    }
    return n < 0 ? Math.pow(-1,n+1)*b : b;
}

function isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
  }

const args = process.argv.slice(1);
const n = args[0];

if(!n){
    process.stdout.write("pass fibonacci number");
    process.exit();    
}

if(!isNumeric(n)){
    process.stdout.write("please, enter integer number");
    process.exit();    
}

if(Math.abs(n) > 10000){
    process.stdout.write("number should be in range from -10000 to 10000");
    process.exit();
}

const fnum = fib(parseInt(n));

process.stdout.write(fnum.toString());
