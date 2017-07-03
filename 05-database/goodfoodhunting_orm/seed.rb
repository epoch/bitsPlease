require 'active_record'

require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/comment'
require_relative 'models/user'
require_relative 'models/dish_type'

DishType.create name: 'brunch'
DishType.create name: 'dessert'
DishType.create name: 'dinner'

