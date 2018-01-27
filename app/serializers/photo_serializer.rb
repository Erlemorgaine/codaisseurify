class PhotoSerializer < ActiveModel::Serializer
  attributes :image

  belongs_to :artist
end
