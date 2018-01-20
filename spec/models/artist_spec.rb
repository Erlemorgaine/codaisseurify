require 'rails_helper'

RSpec.describe Artist, type: :model do
  describe "validations" do
    it "is invalid without name" do

      artist = Artist.new(name: "")
      artist.valid?
      expect(artist.errors).to have_key(:name)
    end

    it "is invalid without birth_date" do
      artist = Artist.new(birth_date: nil)
      artist.valid?
      expect(artist.errors).to have_key(:birth_date)
    end

    it "is invalid without origin" do
      artist = Artist.new(origin: "")
      artist.valid?
      expect(artist.errors).to have_key(:origin)
    end

    it "is invalid without genre" do
      artist = Artist.new(genre: nil)
      artist.valid?
      expect(artist.errors).to have_key(:genre)
    end

    it "is invalid with description longer than 500 words" do
      artist = Artist.new(description: "1" * 501)
      artist.valid?
      expect(artist.errors).to have_key(:description)
    end
  end
end
