str = ''
for i in 0 ... ARGV.length
    str = str + ARGV[i]
end

res = []

v = if str.scan(/[aeiou]/i).any? then res.push(str.scan(/[aeiou]/i).join("")) end
c = if str.scan(/[bcdfghjklmnpqrstvwxyz]/i).any? then res.push(str.scan(/[bcdfghjklmnpqrstvwxyz]/).join("")) end
d = if str.scan(/[\d]/).any? then res.push(str.scan(/[\d]/).join("")) end

if str.length > 0 then puts res.join(" ") end