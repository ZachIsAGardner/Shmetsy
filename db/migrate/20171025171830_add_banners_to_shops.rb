class AddBannersToShops < ActiveRecord::Migration[5.1]
  def change
    remove_column :shops, :img_url
    add_column :shops, :img_banner, :string
    add_column :shops, :img_profile, :string
  end
end
