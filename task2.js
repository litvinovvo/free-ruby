const args = process.argv;

function fib(n) {
    if (Math.abs(n) < 2) return Math.abs(n);

    let a = 0;
    let b = 1;
    const nAbs = Math.abs(n)
    for (let i = 2; i <= nAbs; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return n < 0 ? b*(Math.pow(-1, n + 1)) : b;
}

if (args[2]) process.stdout.write(fib(parseInt(args[2])).toString());
