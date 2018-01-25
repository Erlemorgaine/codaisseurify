require 'rails_helper'

feature 'Add new song', js: true do
  let!(:artist) { create :artist }

  scenario 'add a new song' do
    visit new_artist_song_path(artist)

    fill_in 'song_name', with: 'Be Batman'
    select '1919', from: 'song_year'
    fill_in 'song_album', with: 'Batman'

    page.execute_script("$('form').submit()")

    expect(page).to have_content('Be Batman')
    expect(page).to have_content('1919')
    expect(page).to have_content('Batman')
  end
end
