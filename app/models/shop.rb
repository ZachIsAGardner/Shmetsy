class Shop < ApplicationRecord
  validates :shopname, :owner_id, presence: true

  has_attached_file :image, default_url: "alPixelIdle0.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :banner, default_url: "alPixelIdle0.png"
  validates_attachment_content_type :banner, content_type: /\Aimage\/.*\z/

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many :listings
end
