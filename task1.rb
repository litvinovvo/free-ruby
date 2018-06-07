s = ''
for i in 0 ... ARGV.length
    s = s + ARGV[i]
end

def isPalindrome (s)
    s.downcase.gsub(/[\W_]/,'').eql?(s.downcase.gsub(/[\W_]/,'').reverse) ? 'YES' : 'NO'
end

if s.length > 0 then puts isPalindrome(s) end
