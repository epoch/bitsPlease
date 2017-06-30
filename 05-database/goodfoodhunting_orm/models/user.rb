class User < ActiveRecord::Base
  has_secure_password # this give you 2 methods .password and .authenticate
end