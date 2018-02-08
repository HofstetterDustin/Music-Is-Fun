function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(results) {
    var template = ''

    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      template += `
        <div class="row">
          <div class="col-sm-6">
            <img  src="${result.albumArt}">
          </div>
          <div class="col-sm-6">
            <h3 class="card-title">Title: ${result.title}</h3>
            <h5 class="artist">Artist: ${result.artist}</h5>
            <h6 class="collection">Collection: ${result.collection}</h6>
            <h6 class="price">Price: ${result.price}</h6>
          </div>
        </div>
        <div class="row">    
          <div class="col-sm">  
            <audio controls>
              <source src="${result.preview}" type="Audio/mpeg">
            </audio>
          </div>
        </div>  
       `
    }
    document.getElementById("songs").innerHTML = template
  }


}


