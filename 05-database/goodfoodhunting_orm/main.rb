require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/comment'
require_relative 'models/user'

def run_sql(sql)
  conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec(sql)
  conn.close
  result  
end

helpers do

  def logged_in?
    if current_user
      true
    else
      false
    end 

    # !!current_user
    # current_user ? true : false  
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

end

enable :sessions

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
  # sql = "INSERT INTO dishes(name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
  # run_sql(sql)
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  redirect '/dishes'
end

# http://localhost:4567/dish_details/cake
get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  @comments = Comment.where(dish_id: params[:id])

  # return sql2
  erb :dish_details
end

get '/dishes/:id/edit' do
  # sql = "SELECT * FROM dishes WHERE id = #{ params[:id] }"
  # @dish = run_sql(sql)[0]

  @dish = Dish.find(params[:id])
  erb :edit
end

patch '/dishes/:id' do
  # run_sql("UPDATE dishes SET name = '#{ params[:name] }', image_url = '#{ params[:image_url] }' WHERE id = #{ params[:id] }")
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save

  redirect '/dishes'
end

delete '/dishes/:id' do
  # run_sql("DELETE FROM dishes WHERE id = #{ params[:id] };")
  dish = Dish.find(params[:id])
  dish.destroy

  redirect '/dishes'
end

post '/comments' do
  redirect '/login' if !session[:user_id] 

  sql = "INSERT INTO comments (body, dish_id) VALUES ('#{ params[:body] }', #{ params[:dish_id] })"
  run_sql(sql)
  redirect "/dishes/#{ params[:dish_id] }"

end

get '/login' do
  erb :login
end

post '/session' do
  # search for the user in the db
  user = User.find_by(email: params[:email])
  # authenticate that user with the password they gave you
  if user && user.authenticate(params[:password])
    # create a session
    session[:user_id] = user.id
    # redirect to protected page
    redirect '/dishes'
  else
    erb :login 
  end 
end

delete '/session' do
  session[:user_id] = nil
  redirect '/login' 
end








