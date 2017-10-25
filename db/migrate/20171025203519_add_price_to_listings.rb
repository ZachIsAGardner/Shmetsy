class AddPriceToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :price, :float
  end
end
