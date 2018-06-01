s = ''
for i in 0 ... ARGV.length
  s = s + ARGV[i]
end

def isPalindrome (s)
    s.downcase.scan(/\w/).eql?(s.downcase.scan(/\w/).reverse) ? 'YES' : 'NO'
end

if s.length > 0 then puts isPalindrome(s) end
