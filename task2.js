function fib(n) {

    if (n === 0) return 0;
    if (n === 1 || n === 2 || n === -1) return 1;
    if (n === -2) return -1;

    let a = 1;
    let b = 1;
    const nAbs = Math.abs(n)
    for (let i = 3; i <= nAbs; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return n < 0 ? Math.pow(-1, n + 1) * b : b;
}
const n = process.argv[2];

const fnum = fib(parseInt(n));
process.stdout.write(fnum.toString());
