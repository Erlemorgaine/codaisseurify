class Api::SongsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :load_artist

  def create
    song = artist.songs.create(song_params)

    if song.save
      render status: 201, json: {
        song: song
      }.to_json
    else
      render status: 422, json: {
        errors: song.errors
      }.to_json
    end
  end

  def destroy
    song = Song.find(params[:id])
    song.destroy

    render status: 200, json: {
      message: "Song successfully deleted"
    }.to_json
  end

  private

  def song_params
    params.require(:song).permit(:name, :year, :album, :artist_id)
  end

  def load_artist
    artist = Artist.find(params[:artist_id])
    render status: 200, json: {
      artist: artist
    }.to_json
  end

end
