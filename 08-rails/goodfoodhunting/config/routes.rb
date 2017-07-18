Rails.application.routes.draw do
  resources :dishes
  # get '/dishes', to: 'dishes#index' # whats generated behind scenes
  # post '/dishes', to: 'dishes#create'
  # get '/dishes/new', to: 'dishes#new' ----------------------
  # get '/dishes/:id', to: 'dishes#show'
  # get '/dishes/:id/edit', to: 'dishes#edit'
  # delete '/dishes/:id', to: 'dishes#destroy'

  get '/about', to: 'pages#about'


  # get '/reviews/new', to: 'reviews#new'
  # post '/reviews', to: 'reviews#create'

  resources :reviews, only: [:new, :create]
end
