def fast_fib(fib_n)
    fib_n < 0 ? ((-1)**(fib_n + 1)) * _fib(fib_n.abs)[0] : _fib(fib_n)[0]
end
  
def _fib(n)
    if n == 0
        return [0, 1]
    else
        a, b = _fib(n / 2)
        c = a * (b * 2 - a)
        d = a * a + b * b

        if n % 2 == 0
            [c, d]
        else
            [d, c + d]
        end
    end
end

puts fast_fib(ARGV[0].to_i)