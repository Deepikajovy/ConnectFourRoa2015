$(document).ready(function() {

  var connect = new Connect();
  connect.generateGrid();
 
  // connect.renderGrid();
var count=0;
$('div').click(function(){

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

console.log(this)

for (var i = 0; i < 6; i++) {
	if(this.())
};

});
});
