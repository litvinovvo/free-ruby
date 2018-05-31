n = ARGV[0].to_i

def fib(n) 
    if n == 0 then return 0
    elsif n == 1 || n == 2 || n== -1 then return 1
    elsif n == -2 then return -1
    end
    a = 1;
    b = 1;
    nAbs = n.abs
    (3..nAbs).each do |;c|
        c = a+b
        a = b
        b = c
    end
    return n < 0 ? ((-1)**(n+1))*b : b    
end

puts fib(n)

