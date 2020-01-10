class AdoptPetSerializer < ActiveModel::Serializer
  attributes :id, :hunger, :social, :fun, :hygiene, :user_id, :pet_id
  has_one :user
  has_one :pet
end
