class CreateCartings < ActiveRecord::Migration[5.1]
  def change
    create_table :cartings do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
    end
  end
end
