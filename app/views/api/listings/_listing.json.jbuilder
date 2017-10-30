json.extract! listing, :id, :title, :description, :img_main, :price, :stock, :created_at, :updated_at, :owner_id, :shop_id, :owner, :shop, :cartings
json.image_url asset_path(listing.image.url)
