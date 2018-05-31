str = ARGV[0]

strClean = str.gsub(/\W/i,'').downcase
strReverse = strClean.reverse

puts strReverse == strClean ? "YES" : "NO"
