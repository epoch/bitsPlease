class Api::CommentsController < ApplicationController

  def index
    comments = [{
      content: 'cake'
    }, {
      content: 'pudding'
    }, {
      content: 'muffins'
    }]

    render json: comments
  end

end
