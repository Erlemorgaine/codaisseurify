class Api::ArtistsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_artist, only: [:show]

  def index
    render status: 200, json: {
      artists: Artist.all
    }.to_json
  end

  def show
    songs = artist.songs
    render status: 200, json: {
      songs: songs
    }.to_json

    photos = artist.photos
    render status: 200, json: {
      photos: photos
    }.to_json
  end

  def set_artist
    artist = Artist.find(params[:id])
    render status: 200, json: {
      artist: artist
    }.to_json
  end

  def artist_params
    params.require(:artist).permit(:name, :birth_date, :origin, :genre, song_ids: [], photo_ids: [])
  end

end
