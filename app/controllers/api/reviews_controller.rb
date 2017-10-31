class Api::ReviewsController < ApplicationController

  def index
    if (params[:filterByListing])
      @reviews = Review.where(listing_id: params[:filterByListing])
    else
      @reviews = Review.all
    end

    render :index
  end

  def create
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :body, :rating, :user_id, :listing_id)
  end

end
