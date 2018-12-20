class Api::EventsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
    render :show
  end
  def create
    @event = Event.new(event_params)
    @event.creator_id = current_user.id;
    render "/api/events/show"
  end

  private


  def event_params
    params.require(:event).permit(
      :event_date,
      :location,
      :title,
      :description,
      :category_id,
      :pic
    )
  end


end
