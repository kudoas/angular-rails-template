Rails.application.routes.draw do
  # ping 
  match 'ping' => 'ping#index', :via => :get
end
