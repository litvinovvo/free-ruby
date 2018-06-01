str = ARGV[0]

def checkPalindrome(str) 
    strClean = str.gsub(/\W/i,'').downcase
    strReverse = strClean.reverse
    strReverse == strClean ? "YES" : "NO"
end

puts checkPalindrome(str)
