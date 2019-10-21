Rails.application.routes.draw do
  devise_for :users
  get 'about/pages'
  get 'curriculum_vitae/home'
  root to: 'pages#home'
  resources :boards
end
