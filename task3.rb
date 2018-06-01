str = ARGV[0]
res = []

v = if str.scan(/[aeiou]/i).any? then res.push(str.scan(/[aeiou]/i).join("")) end
c = if str.scan(/[bcdfghjklmnpqrstvwxyz]/i).any? then res.push(str.scan(/[bcdfghjklmnpqrstvwxyz]/).join("")) end
d = if str.scan(/[\d]/).any? then res.push(str.scan(/[\d]/).join("")) end

puts res.join(" ")