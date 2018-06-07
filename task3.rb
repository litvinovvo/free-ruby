str = ''

for i in 0 ... ARGV.length
    str = str + ARGV[i]
end

vowels = []
consonants = []
digits = []
    
str.chars.each do |c|
    if (/[aeiouy]/i).match?(c) then vowels.push(c)
    elsif (/[bcdfghjklmnpqrstvwxz]/i).match?(c) then consonants.push(c)
    elsif (/[\d]/).match?(c) then digits.push(c)
    end 
end

puts vowels.join + ' ' + consonants.join + ' ' + digits.join    