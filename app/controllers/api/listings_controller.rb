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
    @listing = Listing.create!(listing_params);
    render :show
  end

  def update
    @listing = Listing.find(params[:id])
    @listing.update_attributes(listing_params)
    render :show
  end

  private

  def listing_params
    params.require(:listing).permit(:img_main, :title, :description, :price, :stock, :owner_id, :shop_id)
  end
end
