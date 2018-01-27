require 'rails_helper'

describe "View the list of artists" do
  let!(:artist1) { create :artist, name: "Metallica" }
  let!(:artist2) { create :artist, name: "Jack Johnson" }
  let!(:photo1)  { create :photo, artist: artist1 }
  let!(:photo2)  { create :photo, artist: artist2 }

  it "shows all artists and their images" do
    visit artists_url

    expect(page).to have_text("Metallica")
    expect(page).to have_text("Jack Johnson")
  end
end
