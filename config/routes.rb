Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root 'game#index' # Route to the game board

  get 'game/show/:card_id', to: 'game#show', as: 'maximize_card' # Route to maximize a card
end
