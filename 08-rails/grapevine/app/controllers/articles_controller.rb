class ArticlesController < ApplicationController

  def index
    @articles = Article.all
  end

  def show
    @article = Article.find(params[:id])
  end

  def new
  end

  def create
    article = Article.new
    article.title = params[:title]
    article.content = params[:content]
    article.category_id = params[:category_id]

    

    if article.save
      redirect_to '/articles'
    else
      render :new
    end
  end

  def stuff
    render json: { abd: 123 }
  end

end