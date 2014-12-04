$(function() {


  $("#specs_nav_link").on("click", function(){
    $.get( "/api/about.json", function( data ) {  
      $("p.lorem").html(data.body);
    }); 
  });

});

