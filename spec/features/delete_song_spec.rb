require 'rails_helper'

feature 'Delete song', js: true do
  let!(:artist) { create :artist }
  let!(:song) { create :song, id: 20, name: 'Habanera', artist: artist }

  scenario 'delete song' do
    visit artist_path(artist)

    # click_link 'delete-song-<%= song.id%>'

    find(:xpath, "//label[contains(text(),'Habanera')]/following-sibling::a").click

    expect(page).to have_css("li", :count => 0)
  end
end
