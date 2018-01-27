class RemoveImageurlFromArtist < ActiveRecord::Migration[5.1]
  def change
    remove_column :artists, :image_url, :string
  end
end
