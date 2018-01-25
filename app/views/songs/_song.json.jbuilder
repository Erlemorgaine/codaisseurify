json.extract! @song, :id, :name, :year, :album, :created_at, :updated_at
json.url todo_url(@song, format: :json)
