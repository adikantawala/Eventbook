class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.datetime :event_date, null: false
      t.integer :creator_id, null: false 
      t.string :location, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :category_id,	null: false
      t.timestamps
    end
    add_index :events, :creator_id
    add_index :events, :category_id
  end
end
