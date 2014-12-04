$(function() {
  $.get( "/api/about.json", function( data ) {  
     $("p.lorem").append(data.body);

  }, "json" );
});