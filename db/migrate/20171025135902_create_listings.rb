class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :shop_id, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :listings, :shop_id, unique: true
    add_index :listings, :owner_id, unique: true
  end
end
