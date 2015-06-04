$(document).ready(function() {

  var connect = new Connect();
  connect.generateGrid();
 
  // connect.renderGrid();
var count=0;
$('div').click(function(){
//var col = this.Find('id');
//console.log(this)
var colid = $(this).attr("class")

console.log("colid:"+colid)

var col = $('.'+colid);

//console.log(col)
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
var cell = $(col[0]);


for (var i = 5; i > 0; i--) {
 
if($('col'+ [i]).hasClass("player1"))
{console.log(col[i])
   
     $('col'+ [i]).addClass('player2')
     break;
}
else
{
    console.log("hello there", col[i])
    console.log("this is i", i)
}

}
// console.log(col[i])
$('col'+ [6]).addClass("player1")
console.log("Added", col[6])
console.log("this", this)

});
});
