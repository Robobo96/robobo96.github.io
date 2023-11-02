<script src="https://cdnjs.cloudflare.com/ajax/libs/protonet-jquery.inview/1.1.2/jquery.inview.min.js"></script>
<script> 

// © Code by T.RICKS, https://www.tricksdesign.com/
// You have the license to use this code in your projects but not redistribute it to others

// Stagger your animation
 $(".trigger").each(function (i) {
    var $item = $(this); 
    setTimeout(function() { 
      $item.click();
    }, 200*i);
    // delays the next animation by 200 milliseconds
  });
 

// TRIGGERS

// Wait before playing animation
setTimeout(() => {  
// Put the play below this line
}, 800);


// Play animation when something is clicked
$( ".your-button-class" ).click(function() {
	// Put the play below this line
});


// Play animation when hovered in
$( ".your-button-class" ).mouseenter(function() {
		// Put the play below this line
});

// Play animation when hovered out
$( ".your-button-class" ).mouseleave(function() {
		// Put the play below this line
});

// Play animation when scrolled into view
$('#heading-container').one('inview', function(event, isInView) {
  if (isInView) {
		// Put the play below this line
  } else {
  }
});
  
 
</script>
