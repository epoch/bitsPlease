# generate a number
number = Random.rand(1..10) # range

print 'make a guess: (1-10) '
# prompt user for a guess
guess = gets.chomp.to_i

# while the guess is incorrect
while guess != number
  puts 'wrong number'

  # prompt user to guess again
  guess = gets.chomp.to_i
end

puts 'congrats'


