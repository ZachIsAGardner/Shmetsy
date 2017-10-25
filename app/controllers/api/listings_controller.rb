class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
  end

  private
  def listing_params
    params.require(:listing).permit(:title, :description, :img_main)
  end
end
