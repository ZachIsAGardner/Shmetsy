class AddImageColumnsToShops < ActiveRecord::Migration[5.1]
  def up
    add_attachment :shops, :image
  end

  def down
    remove_attachment :shops, :image
  end
end
