class AddIsbandToArtist < ActiveRecord::Migration[5.1]
  def change
    add_column :artists, :is_band, :boolean
  end
end
