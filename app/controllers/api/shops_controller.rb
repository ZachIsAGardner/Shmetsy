class Api::ShopsController < ApplicationController

  def show
    @shop = Shop.find(params[:id])
  end

  private

  def shop_params
    params.require(:shop).permit(:shopname, :img_url, :description, :sales, :location, :owner_id)
  end
end
