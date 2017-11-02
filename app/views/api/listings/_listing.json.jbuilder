json.extract! listing, :id, :title, :description, :img_main, :price, :stock, :created_at, :updated_at, :owner_id, :shop_id, :cartings, :owner
json.image_url asset_path(listing.image.url)

json.shop do
  json.partial! 'api/shops/shop', shop: listing.shop
end
