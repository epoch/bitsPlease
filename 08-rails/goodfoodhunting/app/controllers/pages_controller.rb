class PagesController < ApplicationController

  def about
    @number = 45
    render :about
  end

end
