$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    $("#questions").hide();
    const answers = [];
    
    answers.push($("#favCar").val(), $("#favShoe").val(),$("input:radio[name=favPb]:checked").val());
  
    answers.forEach(function(answer){
      $("ul#answers").append("<li>" + answer + "</li>");
    });

    
    $("#result").show();
      
    if(answers.includes("chunky")) {
      $("#analysis-good").show();
    } else {
      $("#analysis-bad").show();
    }

    $("button#refresh").click(function() {
      location.reload(true);
    });

    event.preventDefault();
  });
});


