function createSong(name, year, album) {

  let artistId = $('div[hidden]').attr('id');

  var newSong = { name: name, year: year, album: album };

  $.ajax({
    type: "POST",
    url: "/api/artists/" + artistId + "/songs",
    data: JSON.stringify({
        song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  })
  .done(function(data) {
    console.log(data);

    var songId = data.song.id;

    var label = $('<label></label>');
    label.attr('for', songId);
    label.html(`${name} (${year}), from the album ${album}`);

    var deleteButton = $('<input type="button" value="Delete song" class="delete-song">')
    deleteButton.bind('click', deleteSingleSong);

    var listItem = $('<li class="song-item"></li>');
    listItem.attr('song-id', songId);
    listItem.append(label).append(deleteButton);

    $(".song-list").append( listItem );
  })
  .fail(function(error) {
    console.log(error);
  })
}

function submitSong(event) {
  event.preventDefault();
  var name = $("#song_name").val()
  var year = $("#song_year").val()
  var album = $("#song_album").val()

  createSong(name, year, album);

  $("#song_name").val(null);
  $("#song_year").val(null);
  $("#song_album").val(null);
}

function deleteAllSongs(event) {
  event.preventDefault();

  $.each($(".song-item"), function(index, listItem) {
    songId = $(listItem).attr('song-id');
    deleteSong(songId);
  });
}

function deleteSong(songId) {
  let artistId = $('div[hidden]').attr('id');

  $.ajax({
    type: "DELETE",
    url: "/api/artists/" + artistId + "/songs/" + songId,
    contentType: "application/json",
    dataType: "json"
  })
  .done(function(data) {
    $('li[song-id="'+ songId +'"]').remove();
  });
}

function deleteSingleSong() {
  event.preventDefault();

  let artistId = $('div[hidden]').attr('id');
  var button = this;
  var listItem = $(this).parent();
  let songId = listItem.attr('song-id');

  $.ajax({
    type: "DELETE",
    url: "/api/artists/" + artistId + "/songs/" + songId,
    contentType: "application/json",
    dataType: "json"
  })
  .done(function(data) {
    console.log(data);

    event.preventDefault();
    $('li[song-id="'+ songId +'"]').remove();
  });
}

$(document).ready(function() {
  $(".delete-song").bind('click', deleteSingleSong);
  $("form").bind('submit', submitSong);
  $("#delete-songs").bind('click', deleteAllSongs);
});
