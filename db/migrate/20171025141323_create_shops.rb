class CreateShops < ActiveRecord::Migration[5.1]
  def change
    create_table :shops do |t|
      t.string :shopname, null: false
      t.string :img_url
      t.string :description
      t.integer :sales
      t.string :location
      t.integer :owner_id
    end
    add_index :shops, :shopname, unique: true
    add_index :shops, :owner_id, unique: true
  end
end
