$("document").ready(function (){
    
  $( "#ani" ).click(function() {
  $( "button" ).animate({
    top: "-=50px",
    width: "85%",
    opacity: 0.85,
    fontSize: "1.2em",
    marginBottom: "10px",
  }, 1500 );
});
    
jQuery.fx.interval = 100;
$( "#clickme" ).click(function() {
  $( "#block" ).toggle( 2000 );
  $( "#block" ).fadeIn( 3000, function() {
  });
});
    
$( "#clickme2" ).click(function() {
  $( "#block2" ).fadeToggle( "slow" );
});
    
$( "#clickme2a" ).click(function() {
 $( "article" ).addClass( "article2" );
});

$( "#clickme3a" ).click(function() {
 $( "article" ).removeClass( "article2" );
});
    
$( "#clickme3" ).click(function() {
  $( "#block3" ).animate({
     width: "0%",
     opacity: 0.8,
     marginLeft: "10in",
     fontSize: "3em",
     borderWidth: "10px"
  }, 3000 );
 });
    
$( "#clickme4" ).click(function() {
  $( "#block4" ).hide( "slow" );
});

$( "#left" ).click(function(){
  $( "#block5" ).animate({ 
      marginLeft: "10in",
      width: "0%",
  }, "slow" );
});
    
$( "#start" ).click(function() {
  var myDiv = $( "#block6" );
  myDiv.show( "slow" );
  myDiv.animate({
    marginLeft: "10in",
  }, 5000 );
});
 
$( "#stop" ).click(function() {
  var myDiv = $( "#block6" );
  myDiv.clearQueue();
  myDiv.stop();
});

$( "#clickme7" ).click(function() {
  if ( $( "#block7" ).is( ":hidden" ) ) {
    $( "div" ).show( "slow" );
  } else {
    $( "div" ).slideUp();
  }
});
    
    $( "#sarah" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry1" ).slideDown( "slow",  complete )
  $( "article:not(#entry1)" ).hide();
});
    
    $( "#morning" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry2" ).show( "slow",  complete );
  $( "article:not(#entry2)" ).hide();
});

  $( "#out" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry3" ).fadeIn( "slow",  complete );
  $( "article:not(#entry3)" ).hide();
});
    
  $( "#white" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry4" ).slideDown( "slow",  complete );
  $( "article:not(#entry4)" ).hide();
});
    
    $( "#glenn" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry5" ).show( "slow",  complete );
  $( "article:not(#entry5)" ).hide();
});
    
    $( "#mojito" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry6" ).fadeIn( "slow",  complete );
  $( "article:not(#entry6)" ).hide();
});
    
   $( "#vegan" ).click(function() {
  function complete() {
    $( "<div>" ).text( this.id ).appendTo( "#log" );
  }
  $( "#entry7" ).slideDown( "slow",  complete );
  $( "article:not(#entry7)" ).hide();
});
    
});
