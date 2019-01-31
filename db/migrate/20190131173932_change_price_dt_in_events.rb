class ChangePriceDtInEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :price
    add_column :events, :ticket_price, :decimal, :precision => 8, :scale => 2, default: 0.00 
  end
end
