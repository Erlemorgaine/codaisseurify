class SongsController < ApplicationController
  before_action :load_artist

  def new
    @song = @artist.songs.build
  end

  def create
    @song = @artist.songs.create(song_params)

    if @song.save
      redirect_to @artist
    else
<<<<<<< HEAD
      redirect_to @artist
=======
      render 'new'
>>>>>>> 11d63831e7844b754c301125e35533ddc7663a34
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    redirect_to @artist
  end

  private

  def song_params
    params.require(:song).permit(:name, :year, :album, :artist_id)
  end

  def load_artist
    @artist = Artist.find(params[:artist_id])
  end

end
