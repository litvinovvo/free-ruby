#  Task 3

str = ARGV[0]

if str.nil?
    abort("pass one ASCII string")
end

if str.length < 1 || str.length > 10000
     abort("string must contain from 1 to 10000 characters")
end

if str.scan(/[^\u0000-\u007F]/).length > 0
    abort("string must contain only ASCII characters")
end

strArr = str.chars
vowels = []
consonants = []
digits = []
res = []

strArr.each do |c|
    if (/[aeiou]/i).match?(c) then vowels.insert(-1,c) # pattern.match?(string) is 50% faster then "test123" =~ /1/
    elsif (/[bcdfghjklmnpqrstvwxyz]/i).match?(c) then consonants.insert(-1,c)
    elsif (/[\d]/i).match?(c) then digits.insert(-1,c) 
    end 
end

if(vowels.length > 0) then res.insert(-1,vowels.join) end
if(consonants.length > 0)then res.insert(-1,consonants.join) end
if(digits.length > 0)then res.insert(-1,digits.join) end


puts res.join(" ")