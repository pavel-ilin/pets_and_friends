class RemoveUsersFromPets < ActiveRecord::Migration[6.0]
  def change
    remove_reference :pets, :user, null: false, foreign_key: true
  end
end
