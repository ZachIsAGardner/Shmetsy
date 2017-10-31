class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
    render :index
  end

  def create
    @review = Review.new(review_params)

    if (@review)
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
