#  Task 2

class String
    def is_i?
       /\A[-+]?\d+\z/ === self
    end
end

n = ARGV[0]


if n.nil? || !n.is_i?
    exit
    # abort("please, enter integer number")
end

n = n.to_i

if n.abs > 10000
    exit
    # abort("number should be in range from -10000 to 10000")
end

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
    return b
    # return n < 0 ? ((-1)**(n+1))*b : b    
end

puts fib(n)

