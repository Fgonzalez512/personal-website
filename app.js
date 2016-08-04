$(document).ready(function() {
    $('#comics-button').on('click', function(event) {
        $('.comics').toggle('show');
    });
    $('#movies-button').on('click', function(event) {
        $('.movies').toggle('show');
    });
    $('#music-button').on('click', function(event) {
        $('.music').toggle('show');
    });
});
