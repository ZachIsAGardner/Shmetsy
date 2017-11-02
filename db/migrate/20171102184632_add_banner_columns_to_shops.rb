class AddBannerColumnsToShops < ActiveRecord::Migration[5.1]
  def up
    add_attachment :shops, :banner
  end

  def down
    remove_attachment :shops, :banner
  end
end
