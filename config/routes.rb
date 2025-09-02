Rails.application.routes.draw do
  # Snippets Endpoints #
  get "/snippets", to: "snippet#index"
  get "/snippets/:id", to: "snippet#show"
  post "/snippets", to: "snippet#create"
  # Defines the root path route ("/")
  # root "posts#index"
end
