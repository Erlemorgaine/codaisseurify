function nextSongId() {
  return $(".song-item").length + 1;
};

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
  .fail(function(error) {
    console.log(error);
  })
  .done(function(data) {
    console.log(data);

    var songId = nextSongId();

    var label = $('<label></label>');
    label.attr('for', songId);
    label.html(`${name} (${year}), from the album ${album}`);

    var deleteButton = $('<input type="button" value="Delete" id="delete-song">')

    var listItem = $('<li class="song-item"></li>');
    listItem.attr('song-id', songId);
    listItem.append(label).append(deleteButton);

    $(".song-list").append( listItem );
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

function deleteSong() {
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

function deleteAllSongs(event) {
  event.preventDefault();
  $(".song-item").remove();
}

// function deleteAllSongs(event) {
//   event.preventDefault();
//   $(".song-item").remove();
// }

$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $("input[type=button]").bind('click', deleteSong);
  $("#delete-songs").bind('click', deleteAllSongs);
});
