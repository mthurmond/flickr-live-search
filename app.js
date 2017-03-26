$(document).ready(function() {
  
// searches the flickr API for photos 
// originally forked from teamtreehouse.com
// ammended with live search feature, code cleanup, and comments by Matt Thurmond @ 03/26/2017 

 var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

//trigger a function when user adjusts the input text
 $('#search').keyup(function () {
    var $searchField = $('#search');
    
    //store search field value in a variable
    var photoSearch = $searchField.val();
    
    //remove existing photos when search form is re-submitted
    $('#photos').html('');
    
    //get photos from flickr API
    $.getJSON(flickrAPI, {
        tags: photoSearch,
        format: "json"
      },
    
    //add photos to the page
    function(data){
      var photoHTML = '';
      if (data.items.length > 0) {
        $.each(data.items,function(i,photo) {
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        }); // end each
      } else {
        photoHTML = "<p>No photos found that match: " + photoSearch + ".</p>"
      }
      $('#photos').html(photoHTML);
      
    }); // end getJSON

  }); // end change

}); // end ready