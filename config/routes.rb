Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :shops, only: [:show, :create];
    resources :listings
    resources :reviews
    post '/listings/:listing_id/purchase', to: 'listings#purchase'
    delete '/listings/:listing_id/remove', to: 'listings#remove'
  end
end
