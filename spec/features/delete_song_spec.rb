require 'rails_helper'

feature 'Delete song', js: true do
  let!(:artist) { create :artist }
  let!(:song) { create :song, id: 20, name: 'Bolero', artist: artist }

  scenario 'delete song' do
    visit artist_path(artist)

    click_link('delete-song-20', visible: false)
    #find("a[@id='delete-song-20']").click

    expect(page).to have_css("li", :count => 0)
    #expect(page).to not_have('Habanera')
  end
end
