class Api::ArtistsController < ApplicationController
  before_action :set_artist, only: [:show]

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
    def index
      artist = Artist.find(params[:id])
      render status: 200, json: {
        artists: Artist.all
      }.to_json
    end
  end

end
