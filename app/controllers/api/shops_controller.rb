class Api::ShopsController < ApplicationController

  def show
    @shop = Shop.find(params[:id])
    render :show
  end

  def create
    @shop = Shop.new(shop_params);
    if @shop.save
      render :show
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  def update
    @shop = Shop.find(params[:id])
    if @shop && @shop.update_attributes(shop_params)
      render :show
    else
      render json: ["Invalid shop parameters"], status: 422
    end
  end

  private

  def shop_params
    params.require(:shop).permit(:banner, :image, :shopname, :description, :sales, :location, :owner_id, :img_profile, :img_banner)
  end
end
