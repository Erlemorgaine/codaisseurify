class Api::SongsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_artist

  def new
    song = @artist.songs.build
  end

  def create
    song = @artist.songs.create(song_params)

    if song.save
      render status: 201, json: {
        artist: @artist,
        song: song
      }.to_json
      format.html { redirect_to @artist, notice: 'Song was successfully created.' }
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
    params.require(:song).permit(:name, :year, :album)
  end

  def set_artist
    @artist = Artist.find(params[:artist_id])
  end

end
