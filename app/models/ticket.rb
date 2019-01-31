class Ticket < ApplicationRecord
  validates :purchaser_id, :event_id, :quantity, presence: true
  belongs_to :purchaser,
    class_name: :User

  belongs_to :event,
    class_name: :Event
end
