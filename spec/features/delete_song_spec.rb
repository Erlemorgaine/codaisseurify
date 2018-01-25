require 'rails_helper'

feature 'Delete song', js: true do
  let!(:artist) { create :artist }
  let!(:song) { create :song, artist: artist }

  scenario 'delete song' do
    visit artist_song_path(artist)

    click_link '',

    page.execute_script("$('form').submit()")

    expect(page).to have_content('Be Batman')
  end
end
