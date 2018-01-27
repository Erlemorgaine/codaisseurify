require jquery

function nextSongId() {
  return $(".song-item").length + 1;
};

function createSong(name, year, album) {

  var newSong = { name: name, year: year, album: album };

  $.ajax({
    type: "POST",
    url: "/api/artists/1/songs" //+ artistid in variable + "/songs",
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

    var songId = "song-" + nextSongId();

    var label = $('<label></label>');
    label.attr('for', songId);
    label.html(name + " ("+ year +"), from the album "+ album + " ");

    var deleteButton = $('<input type="button" value="Delete" onclick="deleteSong()" id="delete-song">')

    var listItem = $('<li class="song-item"></li>');
    listItem.attr('id', songId);
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

function deleteSong(event) {
  event.preventDefault();
  var link = this;
  $(link).parent().remove();
}

function deleteAllSongs(event) {
  event.preventDefault();
  $(".song-item").remove();
}

$(document).ready(function() {
  $("form").bind('submit', submitSong);
  $("#delete-song").bind('click', deleteSong);
  $("#delete-songs").bind('click', deleteAllSongs);
});
