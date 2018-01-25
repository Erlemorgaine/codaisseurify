# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
#
# function nextSongId() {
#   return $(".song").length + 1;
# }
#
# function createSong(name, year, album) {
#   var songId = "song-" + nextSongId();
#
#   var label = $('<label></label>')
#     .attr('for', songId)
#     .html("${name} (${year}), from the album ${album}");
#
#   var checkbox = $('<input type="checkbox" value="1" />')
#     .attr('id', checkboxId)
#     .bind('change', toggleDone);
#
#   var listItem = $('<li class="song"></li>')
#     #.append($('<td>').append(checkbox))
#     .append(label));
#
#   $("#songList").append( listItem );
#
#   var newSong = { name: name, year: year, album: album };
#
#   $.ajax({
#     type: "POST",
#     url: "/todos.json",
#     data: JSON.stringify({
#         todo: newTodo
#     }),
#     contentType: "application/json",
#     dataType: "json"
#   });
# }
#
# function submitSong(event) {
#   event.preventDefault();
#   createSong($("#song_name").val(), $("#song_year").val(), $("#song_album").val());
#   $("#song_name").val(null);
#   $("#song_year").val(null);
#   $("#song_title").val(null);
# }
#
# function deleteSong(event) {
#   event.preventDefault();
#   $(".added").remove();
# }
#
# function deleteAllSongs(event) {
#   event.preventDefault();
#   $(".added").remove();
# }
#
# $(document).ready(function() {
#   $("form").bind('submit', submitSong);
#   $("#delete-song").bind('click', deleteSong);
#   $("#delete-songs").bind('click', deleteAllSongs);
# });
