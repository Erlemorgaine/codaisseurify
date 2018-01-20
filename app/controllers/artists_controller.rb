class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :edit, :update]

  def index
    @artists = Artist.all
  end

  def show
    @songs = @artist.songs
    @photos = @artist.photos
  end

  private

  def set_artist
    @artist = Artist.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit(:name, :birth_date, :origin, :genre, :description, :is_band, song_ids: [])
  end

end
