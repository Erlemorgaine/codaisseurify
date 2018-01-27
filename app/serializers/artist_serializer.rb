class ArtistSerializer < ActiveModel::Serializer
<<<<<<< HEAD
  attributes :name, :birth_date, :origin, :genre, :description
=======
  attributes :name, :birth_date, :origin, :genre
>>>>>>> 11d63831e7844b754c301125e35533ddc7663a34

  has_many :songs
  has_many :photos
end
