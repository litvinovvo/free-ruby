str = ARGV[0]

strArr = str.chars
v = []
c = []
d = []
res = []

strArr.each do |l|
    if (/[aeiou]/i).match?(l) then v.insert(-1,l)
    elsif (/[bcdfghjklmnpqrstvwxyz]/i).match?(l) then c.insert(-1,l)
    elsif (/[\d]/i).match?(l) then d.insert(-1,l) 
    end 
end

if(v.length > 0) then res.insert(-1,v.join) end
if(c.length > 0) then res.insert(-1,c.join) end
if(d.length > 0) then res.insert(-1,d.join) end

puts res.join(" ")