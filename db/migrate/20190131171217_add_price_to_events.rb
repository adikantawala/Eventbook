class AddPriceToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :price, :float, null: false, default: 0.00
  end
end
