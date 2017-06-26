require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/' do
  @languages = ['javascript', 'ruby', 'python']

  
  
  erb :index
end

# http://localhost:4567/stock?stock=APPL
get '/stock' do
  result = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])
  quote = result[ params[:stock] ]
  
  @price = quote.lastTrade
  # output in html
  erb :result
end

get '/about' do
  'about me'
end
