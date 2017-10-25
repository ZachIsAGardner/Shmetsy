class Shop < ApplicationRecord
  validates :shopname, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'

  # has_many: listings
end
