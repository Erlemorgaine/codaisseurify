require 'rails_helper'

RSpec.describe Song, type: :model do

  describe "association with artist" do
    let(:artist) { create :artist }

    it "belongs to an artist" do
      photo = artist.photos.build

      expect(photo.artist).to eq(artist)
    end
  end

end
