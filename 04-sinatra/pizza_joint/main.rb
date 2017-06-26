require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# router

get '/' do
  erb :index
end

get '/about' do
  return 'hello'
end

get '/result' do
  url = "http://api.fixer.io/latest?base=#{params[:base]}"
  parsed_res = HTTParty.get(url).parsed_response
  @rates = parsed_res['rates']
  erb :result
end






