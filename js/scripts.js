$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());
    const name = $("input#name").val();
    const animal = $("select#animals").val();
    const colors = $("select#Colors").val();
    const button = $("#btn").val();
    
    $('#btn[name=btn')
    .click(
      function () {
        $("#survey").hide();
      }
    );

    if (animals === 'Snake' && number > 7 || Color === 'Green') {
      $("#python").show();
      $("#language").show();
    } 
    if (animals === 'Bunnie' && Color === 'Red') {
      $("ruby").show();
      $("#language").show();
    }
    if (animals === 'Zebra' && number < 1) {
      $("#Java").show().
      $("#language").show();
    } 
    if (Color === 'Blue' || number > 67) {
      $("#Java").show();
      $("#language").show()
    }
  });
});