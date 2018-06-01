str = ARGV[0]

v = str.scan(/[aeiou]/i)
c = str.scan(/[bcdfghjklmnpqrstvwxyz]/i)
d = str.scan(/[\d]/)

res = []

if(v.length > 0) then res.insert(-1,v.join) end
if(c.length > 0) then res.insert(-1,c.join) end
if(d.length > 0) then res.insert(-1,d.join) end

puts res.join(" ")