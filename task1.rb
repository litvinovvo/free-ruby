s = ''
for i in 0 ... ARGV.length
  s = s + ARGV[i]
end

def palindrome (s)
    if s.length < 1 then return 'NO' end
    s.downcase.scan(/\w/).eql?(s.downcase.scan(/\w/).reverse) ? 'YES' : 'NO'
end

puts palindrome(s)
