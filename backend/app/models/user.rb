class User < ApplicationRecord
  has_many :adopt_pets
  has_many :pets, through: :adopt_pets

  has_secure_password

  validates_presence_of :username
  validates_presence_of :password
  validates_uniqueness_of :username, :case_sensitive => false
end
