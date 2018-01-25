require 'rails_helper'

feature 'Add new song', js: true do
  scenario 'add a new song name' do
    # Point your browser towards the todo path
    visit todos_path

    # Enter description in the text field
    fill_in 'song_name', with: 'Be Batman'

    # Press enter (to submit the form)
    page.execute_script("$('form').submit()")

    # Expect the new task to be displayed in the list of tasks
    expect(page).to have_content('Be Batman')
  end
end
