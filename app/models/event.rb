class Event < ApplicationRecord
  validates :event_date, :creator_id, :location, :title, :description, :category_id, :ticket_price, presence: true
  belongs_to :creator,
    class_name: :User

  has_many :tickets,
    foreign_key: :event_id

  has_one_attached :pic
end
