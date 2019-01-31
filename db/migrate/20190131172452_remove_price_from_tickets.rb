class RemovePriceFromTickets < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickets, :price
  end
end
