require 'rails_helper'

feature 'Delete songs', js: true do
  let!(:artist) { create :artist }
  let!(:song) { create :song, id: 1, name: 'Bolero', artist: artist }
  let!(:song) { create :song, id: 2, name: 'Macarena', artist: artist }

  scenario 'delete single song' do
    visit artist_path(artist)

    find("a[@id='delete-song-1']").click

    expect(page).to not_have('Bolero')
  end

  scenario 'delete all songs' do
    visit artist_path(artist)

    click_link('Delete all songs')

    expect(page).to have_css("li", :count => 0)
  end
end
