class Listing < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :shop,
    primary_key: :id,
    foreign_key: :shop_id,
    class_name: "Shop"

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"

end
