class Pet < ApplicationRecord
  # has_many :actions
  has_many :adopt_pets
  has_many :users, through: :adopt_pets
end
