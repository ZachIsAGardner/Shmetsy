class AddImageToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :img_main, :string
  end
end
