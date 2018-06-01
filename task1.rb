puts ARGV[0].downcase.scan(/\w/).eql?(ARGV[0].downcase.scan(/\w/).reverse) ? 'YES' : 'NO'
