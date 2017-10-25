class FixShops < ActiveRecord::Migration[5.1]
  def change
    remove_column :shops, :owner_id
    add_column :shops, :owner_id, :integer, null: false
    add_index :shops, :owner_id, unique: true
  end
end
