var winningconditions = function(id)
{

	var row=id[0];
	var col=id[1];
	
	var row1=row;
	var col1=col;

	while(row1>0&&col1>0)
	{
		row1--;
		col1--;
	}

	

	var row2=row;
	var col2=col;
	while(row2<5&&col2<5)
	{
		row2++;
		col2++;
	}
	

	var leftdiagonalList=[];
	var last=row2.toString()+col2.toString();
	var initial=row1.toString()+col1.toString();

	console.log(initial);
	console.log(last);
	while(initial<last+1)
	{
			leftdiagonalList.push(initial);
			row1++;
			col1++;
			initial=row1.toString()+col1.toString();
	}
	console.log(leftdiagonalList);

	var winningStreak=1;
	var hasWon = false;
	

	for(i=0;i<leftdiagonalList.length - 1;i++)
	{
		var playerClassName = "";
		if(leftdiagonalList.length > 0)
		{
			var firstDiv = $('#'+leftdiagonalList[i]);

			if($(firstDiv).hasClass("player1"))
			{
				playerClassName = "player1";
			} 
			else if($(firstDiv).hasClass("player2"))
			{
				playerClassName = "player2";	
			}
		}

		if($('#'+leftdiagonalList[i+1]).hasClass(playerClassName))
		{
			winningStreak++;
		}
		else
		{
			winningStreak = 1;
		}

		if(winningStreak == 4)
		{
			hasWon = true;
		}
	}
	alert(hasWon);

};