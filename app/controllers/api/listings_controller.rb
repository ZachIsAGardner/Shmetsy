class Api::ListingsController < ApplicationController

  def index
    if (params[:filterByShop])
      @listings = Listing.where(shop_id: params[:filterByShop])
    elsif (params[:filterByListing])
      @listings = Listing.where(shop_id: Listing.where(id: params[:filterByListing]).first.shop.id)
    else
      @listings = Listing.all
    end

    render :index
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
    @listing = Listing.new(listing_params);
  end

  private
  def listing_params
    params.require(:listing).permit(:img_main, :title, :description, :price, :quantity)
  end
end
