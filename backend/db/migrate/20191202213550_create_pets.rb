class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :hunger, default: 5
      t.integer :social, default: 5
      t.integer :fun, default: 5
      t.integer :hygiene, default: 5
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
