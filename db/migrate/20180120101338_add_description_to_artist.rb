class AddDescriptionToArtist < ActiveRecord::Migration[5.1]
  def change
    add_column :artists, :description, :string
  end
end
