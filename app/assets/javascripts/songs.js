function createSong(name, year, album) {

  var newSong = { name: name, year: year, album: album };

  $.ajax({
    type: "POST",
    url: "/api/artists/songs",
    data: JSON.stringify({
        song: newSong
    }),
    contentType: "application/json",
    dataType: "json"
  });
  .done(function(data) {
    console.log(data);

    var nextSongId = data.id;

    var songId = "song-" + nextSongId;

    var label = $('<label></label>')
      .attr('for', songId)
      .html("${name} (${year}), from the album ${album}");

    var listItem = $('<li class="song"></li>')
       .append(label);

    $("#song-list").append( listItem );
  })
}

function submitSong(event) {
  event.preventDefault();
  createSong($("#song_name").val(), $("#song_year").val(), $("#song_album").val());
  $("#song_name").val(null);
  $("#song_year").val(null);
  $("#song_title").val(null);
}

// function deleteSong(event) {
//   event.preventDefault();
//   $("#song-<%= song.id %>").remove();
// }
//
// function deleteAllSongs(event) {
//   event.preventDefault();
//   $(".song").remove();
// }

$(document).ready(function() {
  $("form").bind('submit', submitSong);
  // $("#delete-song").bind('click', deleteSong);
  // $("#delete-songs").bind('click', deleteAllSongs);
});
