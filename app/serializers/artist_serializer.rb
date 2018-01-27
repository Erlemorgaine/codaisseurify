class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :birth_date, :origin, :genre, :description

  has_many :songs
  has_many :photos
end
