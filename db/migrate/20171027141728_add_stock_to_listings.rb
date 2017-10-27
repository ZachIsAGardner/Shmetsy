class AddStockToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :stock, :integer
  end
end
