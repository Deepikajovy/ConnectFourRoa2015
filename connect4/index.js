$(document).ready(function() {

  var connect = new Connect();
  connect.generateGrid();
 
var count=0;
$('div').click(function(){
var colid = $(this).attr("class")
//console.log("colid:"+colid)
var col = $('.'+colid);
count++;

if(count%2===1)
{
	//1st player
  var activeclass = "player1"

}
else
{
  var activeclass = "player2"

}

function column () {
this.Column = [col[0],col[1],col[2],col[3],col[4],col[5]]
}
var newcolumn = column();
var yourClick = Column;
console.log(yourClick)

for (var i = 5; i > -1; i--) {
if(!$(Column[i]).hasClass("player1"))
 {
  if(!$(Column[i]).hasClass("player2"))
{
    console.log("now col equals...", Column[i])
    $(Column[i]).addClass(activeclass)
    break;
}

}
}




// console.log(col[i])
//$('col'+ [6]).addClass("player1")






// var sibs = $(this).siblings(".1")
// console.log("sibs",sibs)
//  var $thatInput = $(this).siblings("selected").text;
//  console.log($thatInput)



// var thisthis = this;
// var sibs = $('#Grid', 'td', 'tr', '.1').siblings();
// console.log("thisthis=", thisthis)
// console.log("sibs =", sibs);

// $('.1').prev().addClass('player1')
// var prevvv = col[3]


// console.log(col);
// var thisthis = $(this)

















// var next = thisthis.next();
// console.log($("#grid .2").prevUntil());
// console.log("this is next", next);
// var number = 1;


 



});
});
