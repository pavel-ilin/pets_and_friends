class AddHungerSocialFunHygieneToAdoptPets < ActiveRecord::Migration[6.0]
  def change
    add_column :adopt_pets, :hunger, :integer
    add_column :adopt_pets, :social, :integer
    add_column :adopt_pets, :fun, :integer
    add_column :adopt_pets, :hygiene, :integer
  end
end
