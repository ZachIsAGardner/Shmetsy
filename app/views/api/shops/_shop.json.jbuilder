json.extract! shop, :id, :shopname, :img_profile, :img_banner, :location, :sales, :description, :created_at, :owner

json.image_url asset_path(shop.image.url)
json.banner_url asset_path(shop.banner.url)
