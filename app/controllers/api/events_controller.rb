class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @events = Event.all
    render :index
  end


  def create
    @event = Event.new(event_params)
    @event.creator_id = current_user.id;
    render :show
  end

  private


  def event_params
    params.require(:event).permit(
      :event_date,
      :location,
      :title,
      :description,
      :category_id
    )
  end


end
