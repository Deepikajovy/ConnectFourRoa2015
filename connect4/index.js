var count = 0;

$(document).ready(function () {

  var connect = new Connect();
  connect.generateGrid(); 

    $('div').click(function () {
     
      var colid = $(this).attr("class")
      console.log(colid);

      var col = $('.' + colid);
      console.log(col); 

      for (var i = 5; i >= 0; i--) {

        console.log(col[i]);

        if (!$(col[i]).hasClass("player1") && !$(col[i]).hasClass("player2")) {

          count++;
          if (count % 2 === 1) {
            //1st player
            $(col[i]).addClass("player1");
            break;
          }
          else {
            $(col[i]).addClass("player2");
            break;
          }
        }
      }

    });






   
});

