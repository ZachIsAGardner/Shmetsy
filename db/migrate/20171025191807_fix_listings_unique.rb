class FixListingsUnique < ActiveRecord::Migration[5.1]
  def change
    remove_index "listings", name: "index_listings_on_owner_id"
    remove_index "listings", name: "index_listings_on_shop_id"
  end
end
