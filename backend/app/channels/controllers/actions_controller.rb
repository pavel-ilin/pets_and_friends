class ActionsController < ApplicationController

  def create
    action = Action.create(action_params)
  end

  private

  def action_params
      params.require(:action).permit(:pet_id, :action_type_id)
  end

end
