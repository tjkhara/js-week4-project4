$(document).ready(function(){
  $("#1").click(function(){
    $("#hidden1").css("display", "inline")
  })

  $("#submitBtn").click(function(){


        var a = $("#textInput").val();
        $( "<h3>" + a + "</h3>" ).insertAfter( ".test2" );

    });

  $("#2").click(function(){
    $("#hidden2").css("display", "inline")
  })

  $(".click").click(function(){

      if($('#checkbox1').prop('checked')) {

          $( "h2" ).removeClass("hidden");


          } else {
              $( "h2" ).addClass("hidden");
          }

  });

//    Adding a quick comment to test git

  $("#3").click(function(){
    $("#hidden3").css("display", "inline")
  })

$('.table > tbody:last-child').append('<tr><td>Peter</td><td>7</td><td>Hangry</td></tr>');

  $("#4").click(function(){
    $("#hidden4").css("display", "inline")
  })

  var table = $("table tbody");

  table.find('tr').each(function (i) {
    var $tds = $(this).find('td'),
    name = $tds.eq(0).text(),
    weight = $tds.eq(1).text(),
    hunger = $tds.eq(2).text();
    // do something with name, weight, hunger
    //        alert('Row ' + (i + 1) + ' :Name: ' + name
    //              + '\nWeight ' + weight
    //              + '\nHunger: ' + hunger);

    if(hunger === "Hangry") {
      $(this).css("color", "red");
    } else if (hunger === "Content") {
      $(this).css("color", "green");
    }
  });



  $("#5").click(function(){
    $("#hidden5").css("display", "inline")
  })
  $("#6").click(function(){
    $("#hidden6").css("display", "inline")
  })
  $("#7").click(function(){
    $("#hidden7").css("display", "inline")
  })
  $("#8").click(function(){
    $("#hidden8").css("display", "inline")
  })
  $("#9").click(function(){
    $("#hidden9").css("display", "inline")
  })
  $("#10").click(function(){
    $("#hidden10").css("display", "inline")
  })
  $("#11").click(function(){
    $("#hidden11").css("display", "inline")
  })
  $("#12").click(function(){
    $("#hidden12").css("display", "inline")
  })
});
