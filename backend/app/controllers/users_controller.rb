class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user_id = params[:id]
    if current_user_id == user_id.to_i
      user = User.find(params[:id])
      render json: user, include: [:pets, :adopt_pets => {:include => :pet}]
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    if user.valid?
        render json: user
    else
        render json: {
            errors: "This username is already taken!"
        }
    end
  end


  private

  def user_params
      params.require(:user).permit(:username, :password)
  end

end
