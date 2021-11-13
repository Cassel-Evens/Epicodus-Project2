$(document).ready(function() {
  $("form#questions").submit(function(event) {
    const age = parseInt($("input#number").val());
    const name = $("input#name").val();
    const animal = $("select#animals").val();
    const animal = $("select#Colors").val();

    


      // $("#rate").text(quote);
      // $("#quote").show();

    event.preventDefault();
  });
});