class Api::ArtistsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_artist, only: [:show]

  def index
    artists = Artist.all
    render status: 200, json: artists
  end

  def show
    songs = artist.songs
    render status: 200, json: songs

    photos = artist.photos
    render status: 200, json: photos
  end

  def set_artist
    artist = Artist.find(params[:id])
    render status: 200, json: artist
  end

  def artist_params
    params.require(:artist).permit(:name, :birth_date, :origin, :genre, song_ids: [], photo_ids: [])
  end

end
