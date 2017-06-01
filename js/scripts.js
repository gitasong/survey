$("document").ready(function() {
  $("#personalData").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    //var eyesInput = $("input:radio[name=eyes]:checked").val();
    //var birthInput = $("#birth").val();
    //var colorInput = $("#color").val(); //need to convert color data to a color name or string?

    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    //$(".eyes").text(eyesInput);
    //$(".birth").text(birthInput);
    //$(".color").text(colorInput);

    $("#result").show();

  });
});
