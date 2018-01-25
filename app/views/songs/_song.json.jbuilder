json.array!(@songs) do |song|
  json.extract! artist, :id, :name, :year, :album
  json.url artist_url(artist, format: :json)
end
