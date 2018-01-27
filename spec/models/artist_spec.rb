require 'rails_helper'

RSpec.describe Artist, type: :model do

  describe "validations" do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:birth_date) }
    it { is_expected.to validate_presence_of(:origin) }
    it { is_expected.to validate_presence_of(:genre) }
    it { is_expected.to validate_length_of(:description).is_at_most(500) }
  end

  describe "association with song" do
    let!(:artist) { create :artist }
    let!(:song) { create :song, artist: artist }

    it "has many songs" do
      song1 = artist.songs.new
      song2 = artist.songs.new

      expect(artist.songs).to include(song1)
      expect(artist.songs).to include(song2)
    end

    it "deletes associated songs" do
      expect { artist.destroy }.to change(Song, :count).by(-1)
   end
  end

  describe "association with photo" do
    let!(:artist) { create :artist }
    let!(:photo) { create :photo, artist: artist }

    it "has many photos" do
      photo1 = artist.photos.new
      photo2 = artist.photos.new

      expect(artist.photos).to include(photo1)
      expect(artist.photos).to include(photo2)
    end

    it "deletes associated photos" do
      expect { artist.destroy }.to change(Photo, :count).by(-1)
   end
  end

end
