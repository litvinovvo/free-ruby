def fib(fib_n)
    fib_n.abs < 2 && (return fib_n.abs)
    a = 0
    b = 1
    (2..fib_n.abs).each do
        c = a + b
        a = b
        b = c
    end
    fib_n < 0 ? ((-1)**(fib_n + 1)) * b : b
end

!ARGV[0].nil? && (puts fib(ARGV[0].to_i).to_s)
