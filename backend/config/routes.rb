Rails.application.routes.draw do
  resources :adopt_pets, only: [:create, :destroy, :show, :update, :index]
  resources :pets, only: [:index, :show, :update]
  resources :users, only: [:index, :show, :create]

  resources :login, only: [:create]

end


# resources :actions
# resources :action_types