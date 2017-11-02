class Api::ShopsController < ApplicationController

  def show
    @shop = Shop.find(params[:id])
  end

  def create
    @shop = Shop.new(shop_params);
    if @shop.save
      render :show
    else
      render json: @shop.errors.full_messages, status: 422
    end
  end

  private

  def shop_params
    params.require(:shop).permit(:shopname, :description, :sales, :location, :owner_id, :img_profile, :img_banner)
  end
end
