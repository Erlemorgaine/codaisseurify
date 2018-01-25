json.extract! @artist, :id, :name, :birth_date, :origin, :genre, :description, :is_band, :song_ids
json.url artist_url(@artist, format: :json)

# json.array!(@artists) do |artist|
#   json.songs do
#     json.array!(artist.songs) do |song|
#       json.name song.name
#       json.year song.year
#       json.album song.album
#     end
#   end
# end
