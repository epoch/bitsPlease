require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

def run_sql(sql)
  conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec(sql)
  conn.close
  result  
end

get '/dish_list' do
  @dishes = run_sql('SELECT * FROM dishes;')
  erb :index
end

# http://localhost:4567/dish_details/cake
get '/dish_details/:id' do
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @dish = run_sql(sql)[0]
  erb :dish_details
end





