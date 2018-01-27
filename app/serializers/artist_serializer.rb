class ArtistSerializer < ActiveModel::Serializer
  attributes :name, :birth_date, :origin, :genre, :description

  has_many :songs
  has_many :photos
end
