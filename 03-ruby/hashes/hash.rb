require 'pry'

# in python dictionary
# similar object literal in js
# hash
# not objects so you can't use object notation
song = {
  title: 'call me maybe',
  artist: 'jackson'
}


# song = {
#   :title => 'call me maybe',
#   :artist => 'jackson'
# }

class_size = 7

wdi_class = {
  'name' => 'bitsPlease',
  'size' => 7,
  :students => ['a','b','c'],
  :fav_color => {
    name: 'mistyrose'
  }
}

# like an array so WHY??
list = {
  0 => 'thing'
}

# arrays are ordered
list = ['thing']


binding.pry