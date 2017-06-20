# create directories for each first name only lowercased
# for each directory inside create a new file named README.md

# intro
#  |
#  |---john
#        |--README.md
#  |---mary
#        |--README.md
#  |---bits
#        |--README.md

# making directories
# changing directories
# making files
# paths
# working arrays (index, iterating)
# working with string methods (lowercase)

require 'pry'
require 'fileutils' # look up functions in this library

hackers = ['John Smith', 'Mary Jane', 'Bits Please']

# iterate through the array with .each
hackers.each do |hacker|
  # working with string methods (lowercase) 
  # 'John Smith' => 'john'
  dir_name = hacker.split(' ').first.downcase
  FileUtils.mkdir dir_name
  FileUtils.cd dir_name do

    if dir_name == 'john'
      FileUtils.touch 'README.md'
    end 

  end
end

# between a do and end we call that a block
# arr.each { |i| puts i }

binding.pry
