require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

require_relative 'db_config'
require_relative 'models/dish'

def run_sql(sql)
  conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec(sql)
  conn.close
  result  
end

# reading
# get '/dishes'
# get '/dishes/:id'
# get '/dishes/new' # optional - getting the new empty form
# get '/dishes/:id/edit' # optional

# create
# post '/dishes'
# get '/create_a_dish'

# delete
# delete '/dishes/:id'
# get '/remove_this_dish_i_hate_it'

# updating
# patch '/dishes/:id'

get '/dishes' do
  @dishes = Dish.all
  erb :index
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  sql = "INSERT INTO dishes(name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"

  run_sql(sql)
  redirect '/dishes'
end

# http://localhost:4567/dish_details/cake
get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  @comments = []

  # return sql2
  erb :dish_details
end

get '/dishes/:id/edit' do
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] }"
  @dish = run_sql(sql)[0]
  erb :edit
end

patch '/dishes/:id' do
  run_sql("UPDATE dishes SET name = '#{ params[:name] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id] }")
  redirect '/dishes'
end

delete '/dishes/:id' do
  run_sql("DELETE FROM dishes WHERE id = #{ params[:id] };")
  redirect '/dishes'
end

post '/comments' do
  sql = "INSERT INTO comments (body, dish_id) VALUES ('#{ params[:body] }', #{ params[:dish_id] })"
  run_sql(sql)
  redirect "/dishes/#{ params[:dish_id] }"
end








