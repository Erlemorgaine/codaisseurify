class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :year, :album

  belongs_to :artist
end
