def fib(fib_n)
    fib_n_abs = fib_n.abs
    fib_n_abs < 2 && (return fib_n_abs)
    a = 0
    b = 1
    (2..fib_n_abs).each do
        c = a + b
        a = b
        b = c
    end
    fib_n < 0 ? ((-1)**(fib_n + 1)) * b : b
end

!ARGV[0].nil? && (puts fib(ARGV[0].to_i).to_s)
