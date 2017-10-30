class AddImageColumnsToListings < ActiveRecord::Migration[5.1]
  def up
    add_attachment :listings, :image
  end

  def down
    remove_attachment :listings, :image
  end
end
