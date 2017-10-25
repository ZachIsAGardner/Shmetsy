class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.new(listing_params)

    if @listing.save

    else

    end
  end

  def destroy

  end


  private
  def listing_params
    params.require(:listing).permit(:title, :description, :img_main)
  end
end
