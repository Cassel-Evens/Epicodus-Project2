$(document).ready(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    const pets = $("input#pets").val();
    const colors = $("input#colors").val();
    const animals = $("input#animals").val();
    const developing = $("input#developing").val();
    const workType = $("input#work-type").val();

    $(".pets").text(petsInput);
    $(".colors").text(colorsInput);
    $(".animals").text(animalsInput);
    $(".developing").text(developingInput);
    $(".work-type").text(work-typeInput);
    
    $("#language").show();
  });
});
