require 'rails_helper'

feature 'Add new song', js: true do
  let!(:artist) { create :artist }

  scenario 'add a new song' do
    visit artist_path(artist)

    fill_in 'song_name', with: 'Go your own way'
    fill_in 'song_year', with: '1990'
    #select '1919', from: 'song_year'
    fill_in 'song_album', with: 'Rumours'

    page.execute_script("$('form').submit()")

    expect(page).to have_content('Go your own way')
    expect(page).to have_content('1990')
    expect(page).to have_content('Rumours')
  end
end
