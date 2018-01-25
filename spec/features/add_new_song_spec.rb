require 'rails_helper'

feature 'Add new song', js: true do
  let!(:artist) { create :artist }

  scenario 'add a new song' do
    # Point your browser towards the todo path
    visit new_artist_song_path(artist)

    # Enter description in the text field
    fill_in 'song_name', with: 'Be Batman'
    select '1919', from: 'song_year'
    fill_in 'song_album', with: 'Batman'

    # Press enter (to submit the form)
    page.execute_script("$('form').submit()")

    # Expect the new task to be displayed in the list of tasks
    expect(page).to have_content('Be Batman')
    expect(page).to have_content('1919')
    expect(page).to have_content('Batman')
  end
end
