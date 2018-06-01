s = ARGV[0]

def isPalindrome (s)
    s.downcase.gsub(/[\W_]/,'').eql?(s.downcase.gsub(/[\W_]/,'').reverse) ? 'YES' : 'NO'
end

if s.to_s.length > 0 then puts isPalindrome(s) end
