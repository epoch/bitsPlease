class DishesController < ApplicationController

  def index
    @dishes = Dish.all
    # raise 'stop the world'
  end
  
  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    @dish = Dish.find(params[:id])
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    dish.save
    redirect_to '/dishes'
  end

  def new
  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    dish.save
    redirect_to '/dishes'
  end

end
