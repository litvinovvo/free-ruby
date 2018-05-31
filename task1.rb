#  Task 1 

str = ARGV[0]

if str.nil?
    exit
    # abort("pass one ASCII string")
end

if str.length < 1 || str.length > 10000
    exit
    #  abort("string must contain from 1 to 10000 characters")
end

if str.scan(/[^\u0000-\u007F]/).length > 0
    exit
    # abort("string must contain only ASCII characters")
end

strClean = str.gsub(/\W/i,'').downcase
strReverse = strClean.reverse

puts strReverse == strClean ? "YES" : "NO"
