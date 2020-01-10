class AdoptPetsController < ApplicationController

  def create
    adopt_pet = AdoptPet.create(adopt_params)
  end

  def index
    adopt_pets = AdoptPet.all
    render json: adopt_pets
  end

  def show
    adopt_pet = AdoptPet.find(params[:id])
    render json: adopt_pet, include: [:pet, :user]
  end

  def destroy
    adopt_pet = AdoptPet.find(params[:id])
    adopt_pet.destroy
  end

  def update
    adopt_pet = AdoptPet.find(params[:id])
    adopt_pet.update(adopt_update_params)
    render json: adopt_pet
  end

  private

  def adopt_params
      params.require(:adopt_pet).permit(:user_id, :pet_id)
  end

  def adopt_update_params
    params.require(:adopt_pet).permit(:hunger, :social, :fun, :hygiene)
  end

end
