class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show]

  def index
    if params[:order] == 'name'
      @artists = Artist.all.order_by_name_asc
    elsif params[:order] == 'created_at'
      @artists = Artist.all.order('created_at')
    else
      @artists = Artist.all
    end
  end

  def show
    @songs = @artist.songs
    @photos = @artist.photos
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to artists_path
  end

  private

  def set_artist
    @artist = Artist.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit(:name, :birth_date, :origin, :genre, :description, :is_band, song_ids: [], photo_ids: [])
  end

end
