function Connect () {
  
  
 
}

Connect.prototype.generateGrid = function () {
var size =6;
var count=0;
var table='<table>'
  var grid = [];
  for (var i = 0; i < size; i++)
   {  	
		table+='<tr>';
	    for (var j = 0; j < size; j++) 
	    {
	    	count++;
			table+='<td>'+'<div class='+count+' '+'id='+i+j+ ' ></div>'+'</td>';
	    }
	    table+='</tr>';  
	    count=0;
  	}
table+='</table>'
$('#grid').append(table);

};

