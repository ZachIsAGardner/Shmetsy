class AddTimestampsToShop < ActiveRecord::Migration[5.1]
  def change
    add_column :shops, :created_at, :datetime
    add_column :shops, :updated_at, :datetime
  end
end
