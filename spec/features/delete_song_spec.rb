require 'rails_helper'

feature 'Delete song', js: true do
  let!(:artist) { create :artist }
  let!(:song) { create :song, artist: artist }

  scenario 'delete song' do
    # Point your browser towards the todo path
    visit artist_song_path(artist)

    # Enter description in the text field
    click_link '',

    # Press enter (to submit the form)
    page.execute_script("$('form').submit()")

    # Expect the new task to be displayed in the list of tasks
    expect(page).to have_content('Be Batman')
    expect(page).to have_content('1919')
    expect(page).to have_content('Batman')
  end
end
