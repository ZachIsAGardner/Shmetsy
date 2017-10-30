class Listing < ApplicationRecord
  validates :title, :description, presence: true

  has_attached_file :image, default_url: "alPixelIdle0.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :shop,
    primary_key: :id,
    foreign_key: :shop_id,
    class_name: "Shop"

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"

end
