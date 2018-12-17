class Event < ApplicationRecord
  validates :event_date, :creator_id, :location, :title, :description, :category_id, presence: true
  belongs_to :creator,
    class_name: :User
end
