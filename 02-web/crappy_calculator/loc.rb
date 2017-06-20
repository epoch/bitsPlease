require 'pry'

# read a file I pass in
line_count = File.read(ARGV[0]).split("\n").length + 1

# File.readlines('app.js')
# a function to read a file 
# what format does it come back as??

# use some programming magic to work to how many lines

# print it out as 
# 17 lines
puts "#{line_count} lines" 
