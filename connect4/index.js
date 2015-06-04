var count = 0;

$(document).ready(function () {

  var connect = new Connect();
  connect.generateGrid(); 

    $('div').click(function () {
     
      var colclass = $(this).attr("class");
      
     

      var col = $('.' + colclass);
      

      for (var i = 5; i >= 0; i--) {

      

        if (!$(col[i]).hasClass("player1") && !$(col[i]).hasClass("player2")) {

          count++;
          if (count % 2 === 1) {
            //1st player
            $(col[i]).addClass("player1");
             var colid=$(col[i]).attr("id")
              winningconditions(colid);
            
            break;
          }
          else
           {
            $(col[i]).addClass("player2");
               var colid=$(col[i]).attr("id")
              winningconditions(colid);
            break;
          }
        }
      }

    });


/*

Left Diagonal 
  Do a -1, -1 on each coordinate until one of it reaches 0
  Add +1, +1 on each coordinates until one of it reaches 5. Record all these coordinates
  
Right Diagonal  
  Do a +1, -1 on each coordinate unit one of it reaches 5 or 0 
  Do a -1, +1 on each coordinate until one of it reaches 0 or 5. Record all these coordinates
  



*/




});

