json.extract! @artist, :id, :name, :birth_date, :origin, :description, :is_band
json.url artist_url(@artist, format: :json)
