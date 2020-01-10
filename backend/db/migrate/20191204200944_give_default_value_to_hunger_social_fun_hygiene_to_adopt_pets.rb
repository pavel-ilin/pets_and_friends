class GiveDefaultValueToHungerSocialFunHygieneToAdoptPets < ActiveRecord::Migration[6.0]
  def change
    change_column :adopt_pets, :hunger, :integer, default: 5
    change_column :adopt_pets, :social, :integer, default: 5
    change_column :adopt_pets, :fun, :integer, default: 5
    change_column :adopt_pets, :hygiene, :integer, default: 5
  end
end
