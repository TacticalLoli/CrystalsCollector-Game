var winCounter = 0;

var lossCounter = 0;

var goalNum = Math.floor(Math.random() * 101) + 19;


$("#number-goal").text(goalNum);


var em1 = Math.floor(Math.random() * 11) + 1;

var em2 = Math.floor(Math.random() * 11) + 1;

var em3 = Math.floor(Math.random() * 11) + 1;

var em4 = Math.floor(Math.random() * 11) + 1;


$("#win-counter").html(winCounter);

$("#loss-counter").html(lossCounter);


var counter = 0;

$("#current").text(counter);


function resetGame() {

    goalNum = Math.floor(Math.random() * 101) + 19;
    $("#number-goal").text(goalNum);

    em1 = Math.floor(Math.random() * 11) + 1;
    em2 = Math.floor(Math.random() * 11) + 1;
    em3 = Math.floor(Math.random() * 11) + 1;
    em4 = Math.floor(Math.random() * 11) + 1;
    counter = 0;

    $("#current").text(counter);
    
}

function win() {

	alert("Andrew Yan won the 2020 presidential election");
    winCounter ++;
    
	$("#win-counter").text(winCounter);
	resetGame();
}

function lose() {

	alert("The Don has been reelected and has aquired the Chaos Emeralds");
    lossCounter ++;
    
	$("#loss-counter").text(lossCounter);
	resetGame();
}

$('#em1').on('click', function(){
    counter = counter + em1;
    
    $('#current').text(counter); 
          
        if (counter == goalNum){
          win();
        }
        else if (counter > goalNum){
          lose();
        }   
  });  

  $('#em2').on ('click', function(){
    counter = counter + em2;
    
    $('#current').text(counter); 
         
        if (counter == goalNum){
          win();
        }
        else if (counter > goalNum){
          lose();
        }   
  });  

  $('#em3').on ('click', function(){
    counter = counter + em2;
    
    $('#current').text(counter); 
         
        if (counter == goalNum){
          win();
        }
        else if (counter > goalNum){
          lose();
        }   
  });  

  $('#em4').on ('click', function(){
    counter = counter + em2;
    
    $('#current').text(counter); 
         
        if (counter == goalNum){
          win();
        }
        else if (counter > goalNum){
          lose();
        }   
  });  
