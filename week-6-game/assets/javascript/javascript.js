$('button').on('click', function() {
        var movie = $(this).data('movie');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10";
        
        //Pause button not working//
        var state = $(this).attr('data-state="still"'); 

            if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }



        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
               
                console.log(queryURL);

                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var movieDiv = $('<div>');

                    var p = $('<p>').text("Rating: " + results[i].rating);

                    var movieImage = $('<img>');
                    movieImage.attr('src', results[i].images.fixed_height.url);

                    movieDiv.append(p);
                    movieDiv.append(movieImage);

                    $('#gifsAppearHere').prepend(movieDiv);
                    //--------------------------------
                }

            });
    });
