class Api::TicketsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @ticket = Ticket.new(ticket_params)
    @ticket.purchaser_id = current_user.id;
    if @ticket.save!
      render "/api/tickets/show"
    # else
    #   render json: { errors: @event.errors.full_messages }, status: 422
    end
  end

  def destroy
    @ticket = Ticket.find(params[:id])
    @ticket.destroy
  end

  private


  def ticket_params
    params.require(:ticket).permit(
      :event_id,
      :quantity,
    )
  end


end
