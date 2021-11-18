$(document).ready(function() {
  $("form#questions").submit(function(event) {
    console.log('work');
    event.preventDefault();
    const number = parseInt($("input#number").val());
    const animals = $("select#animals").val();
    const colors = $("select#Colors").val();


    if (animals === 'Snake' && number < 7 && colors === 'Green') {
        $("#python").show();
        $("#language").show();
        $("#surveys").hide();
        $(".header").hide();
    } else if (animals === 'Bunnie' && colors === 'Red' && number < 6) {
      $("#ruby").show();
      $("#language").show();
      $("#surveys").hide();
      $(".header").hide();
    } else if (animals === 'Zebra' && colors === 'Red' && number > 6) {
      $("#Java").show().
      $("#language").show();
      $("#surveys").hide();
      $(".header").hide();
    } else if (animals === 'Bunnie' && colors === 'Blue' && number > 45) {
      $("#Java").show();
      $("#language").show();
      $("#surveys").hide();
      $(".header").hide();
    } else if (animals === 'Snake' && colors === 'Green' && number > 200) {
      $("#python").show();
      $("#language").show();
      $("#surveys").hide();
      $(".header").hide();
    } else if(animals === 'Zebra' && colors === 'Blue' && number > 1) {
      $("#ruby").show();
      $("#language").show();
      $("#surveys").hide();
      $(".header").hide();
    } else if (colors === 'Blue') {
      $("#Java").show();
      $("#language").show();
      $("#surveys").hide();
      $(".header").hide();
    } else if (colors === 'Green') {
      $("#python").show();
      $("#language").show();
      $("#surveys").hide();
      $(".header").hide();
    } else if (colors === 'Red') {
      $("#ruby").show();
      $("#language").show();
      $("#surveys").hide();
      $(".header").hide();
    }
  });
// });
// });
});

function refresh(){
  window.location.reload("Done.")
}