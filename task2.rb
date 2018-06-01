def fib(n) 
    if n == 0 then return 0
    elsif n.abs == 1 || n == 2 then return 1
    elsif n == -2 then return -1
    end
    a = 1;
    b = 1;
    (3..n.abs).each do |;c|
        c = a+b
        a = b
        b = c
    end
    return n < 0 ? ((-1)**(n+1))*b : b    
end

if(!ARGV[0].nil?) then puts fib(ARGV[0].to_i) end

