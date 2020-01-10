class RemoveHungerSocialFunHygieneFromPets < ActiveRecord::Migration[6.0]
  def change

    remove_column :pets, :hunger, :integer

    remove_column :pets, :social, :integer

    remove_column :pets, :fun, :integer

    remove_column :pets, :hygiene, :integer
  end
end
