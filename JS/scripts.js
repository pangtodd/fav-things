$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    $("#questions").hide();
    const answers = [];
    
    answers.push($("#favCar").val(), $("#favShoe").val(),$("input:radio[name=favPb]:checked").val());
  
    answers.forEach(function(answer){
      $("ul#answers").append("<li>" + answer + "</li>");
    });

    
    $("#result").show();
    const stringAnswers = answers.join(" ");      
    
    if (stringAnswers.includes("rius")){
        $("#analysis-good").show();
      } else if (stringAnswers.includes("azz")) {
        $("#analysis-good").show();
      } else if (stringAnswers.includes("chunky")){
        $("#analysis-good").show();
      } else {
        $("#analysis-bad").show();
      }
    });

    $("button#refresh").click(function() {
      location.reload(true);
    });

  
  })


