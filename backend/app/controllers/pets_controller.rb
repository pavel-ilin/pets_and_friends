class PetsController < ApplicationController

  def index
    pets = Pet.all
    render json: pets
  end

  def show
    pet = Pet.find(params[:id])
    render json: pet
  end

  def update
    pet = Pet.find(params[:id])
    pet.update(pet_update_params)
    render json: pet
  end

  private

  def pet_update_params
    params.require(:pet).permit(:name, :hunger, :social, :fun, :hygiene)
  end

end
