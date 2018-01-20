class SongController < ApplicationController

  def new
    @song = Song.new
  end

  def create
    @song = Song.new(song_params)

    if @song.save
      redirect_to @song
    else
      render 'new'
    end
  end

  private

  def song_params
    params.require(:song).permit(:name, :year, :album)
  end

end
