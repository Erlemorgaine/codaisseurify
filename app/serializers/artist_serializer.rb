class ArtistSerializer < ActiveModel::Serializer
  attributes :name, :birth_date, :origin, :genre

  has_many :songs
  has_many :photos
end
