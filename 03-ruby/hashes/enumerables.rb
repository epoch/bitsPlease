require 'pry'

languages = ['js','ruby','php']

lucky_numbers = [1,7,21]


# in js we call it higher order functions

# ruby block
languages.each do |lang| 
  puts lang
end

total = 0
lucky_numbers.each do |num|
  total = total + num
  puts total
end

song = {
  title: 'call me maybe',
  artist: 'jackson'
}

song.each do |key_value_pair|
  puts key_value_pair
end

# languages.find do |lang|
#   lang == 'ruby'
# end

# map as transform
# ['js','ruby','php']
# upcase upcase upcase

upcased_languages = languages.map do |lang|
  lang.upcase
end


# ['JS','RUBY','PHP']      

binding.pry