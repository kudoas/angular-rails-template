class PingController < ApplicationController
  def index
    render json: { 
      status: 'SUCCESS', 
      message: 'PING', 
      data: {'text': "OK"}
    }
  end
end
