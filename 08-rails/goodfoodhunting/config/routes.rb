Rails.application.routes.draw do
  resources :dishes

  get '/about', to: 'pages#about'

  # get '/dishes', 'dishes#index' # whats generated behind scenes
  # post '/dishes'
  # get '/dishes/new'
  # get '/dishes/:id'
  # get '/dishes/:id/edit'
  # delete '/dishes/:id'

end
