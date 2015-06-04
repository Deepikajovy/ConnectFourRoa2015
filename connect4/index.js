$(document).ready(function() {

  var connect = new Connect();
  connect.generateGrid();
 
  // connect.renderGrid();
var count=0;
$('div').click(function(){
//var col = this.Find('id');
console.log(this)
var colid = $(this).attr("class")

console.log("colid:"+colid)

var col = $('.'+colid);

console.log(col)
count++;
if(count%2===1)
{
	//1st player
	$( this ).addClass( "player1" );
}
else
{
	$( this ).addClass( "player2" );
}

// console.log(this)

for (var i = 6; i > 0; i--) {
 
if(!$().hasClass("player1"))
{
   col[i].addClass('player1') ;
}
}

});
});
