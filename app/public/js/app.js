$(function() {


  $("#specs_nav_link").on("click", function(){
    $.get( "/api/about.json", function( data ) {  
      $("p.lorem").html(data.body);
    }); 
  });

  $("#about_nav_link").on("click", function(){
    $.get( "/api/about.json", function( data ) {  
      $("p.lorem").html(data.body);
    });
  });

  // $("span.bird").on("mouseenter", function(){
  //   console.log("hi");
  // });
  $("p.lorem").on("mouseenter", "span.bird", function(){
    $(this).html('<img src="/images/logo.png" alt="bird icon">');
  });

   $("p.lorem").on("mouseleave", "span.bird", function(){
    $(this).html('bird');
  });
});

