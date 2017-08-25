var targetNumber = Math.floor(Math.random() * 120) + 19;
  $("#number-to-guess").text(targetNumber);
  var counter = 0;
  var numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];

  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);

//suppose to reset image values and new target number
    if (counter === targetNumber) {
      alert("You win!");
      targetNumber = Math.floor(Math.random() * 120) + 19; //successfully resets target number
      counter = 0; //successfully resets counter
      numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]; //does not change values of images
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      targetNumber = Math.floor(Math.random() * 120) + 19; //successfully resets target number
      counter = 0; //successfully resets counter
      numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]; //does not change values of images
    }

$("#number-to-guess").text(targetNumber);

  });