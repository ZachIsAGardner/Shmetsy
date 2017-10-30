class Api::ListingsController < ApplicationController

  def index
    if (params[:filterByShop])
      @listings = Listing.where(shop_id: params[:filterByShop])
    elsif (params[:filterByListing])
      @listings = Listing.where(shop_id: Listing.where(id: params[:filterByListing]).first.shop.id)
    elsif (params[:filterByCart])
      @listings = Listing.where(id: current_user.cart_items.ids)
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

  def purchase
    @listing = Listing.find(params[:listing_id])
    @carting = current_user.cartings.new(listing: @listing)

    if @carting.save
      render :show
    else
      render json: ['Could not add item to cart'], status: 422
    end
  end

  def remove
    @listing = Listing.find(params[:listing_id])
    @cartings = current_user.cartings.where(listing_id: params[:listing_id])

    if @cartings.destroy_all
      render :show
    else
      render json: @carting.errors.full_messages, status: 422
    end
  end

  private

  def listing_params
    params.require(:listing).permit(:image, :title, :description, :price, :stock, :owner_id, :shop_id)
  end
end
