require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting',
  username: 'daniel' # most of you don't need this
}

ActiveRecord::Base.establish_connection(options)