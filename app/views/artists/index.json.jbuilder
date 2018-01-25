json.array!(@artists) do |artist|
  json.extract! artist, :id, :name, :birth_date, :origin, :genre, :description, :is_band, :song_ids
  json.url artist_url(artist, format: :json)
end
