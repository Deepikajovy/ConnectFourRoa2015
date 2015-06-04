$(document).ready(function() {
var rendered = new render();
this.rendeed();

});


  var $board = $('.board');

  var init = function() {
    board = [];
    for (var i = 0; i < height; i++) {
      var row = [];
      for (var j = 0; j < width; j++) {
        row.push(0);
      }
      board.push(row);
    }

    
  };

  var render = function() {
    $board.html('');
    for (var row = 0; row < height; row++) {
      var $row = $("<div class='row'></div>");
      for (var col = 0; col < width; col++) {
        var $cell = $("<div class='cell'></div>")
        $cell.attr('row', row);
        $cell.attr('col', col);

        var piece = board[row][col];
        if (piece) {
          var $piece = $("<div class='piece'><div>")
          $piece.addClass(piece === 1 ? "one" : "two");
          $piece.appendTo($cell);
        }
        $cell.appendTo($row);
      }
      $row.appendTo($board);
    }
  };


  