Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :exhibits do
      resources :artifacts
    end
    resources :items
  end
end
