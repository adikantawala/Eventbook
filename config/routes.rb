Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:index, :show, :create, :destroy]
    resources :tickets, only: [:create, :destroy, :index]

    get "/current_user", to: "users#current_user_profile"
  end
  root "static_pages#root"
end
