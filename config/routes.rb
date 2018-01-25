Rails.application.routes.draw do
  root 'artists#index'

  resources :artists, except: [:new, :create, :edit, :update] do
    resources :songs, only: [:new, :create, :destroy]
  end

  namespace :api do
    resources :artists, except: [:new, :create, :edit, :update] do
      resources :songs, only: [:new, :create, :destroy]
    end
  end

end
