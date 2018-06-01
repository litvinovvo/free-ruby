s = ARGV[0]

def isPalindrome (s)
    s.downcase.scan(/\w/).eql?(s.downcase.scan(/\w/).reverse) ? 'YES' : 'NO'
end

if s.length > 0 then puts isPalindrome(s) end
