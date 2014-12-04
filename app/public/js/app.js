$(function() {
  function (event) {

    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "http://class.sandbox.devleague.com/data/flappy_app/about.json";
      contentType: "application/json",
      data: {
        public/api/about.json
      },
      success: function(response){
        
      }
    });
  }

});