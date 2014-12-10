/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
var yvel = 0, xvel = 0;
var up = false, // W or arrow up
            left = false, // A or arrow left
            right = false, // D or arrow right
            down = false; // S or arrow down			
//var scoreText = 0;
//var newScoreText = 0;
var playing = false;
var alreadyExists = false;
var AlreadyPlayed = 0;
//var AlreadyShowedScores = 0;

   //Edge symbol: 'stage'
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "document", "keydown", function(sym, e) {
         if(e.which == 37){
         	left = true;
         }
         if(e.which == 38){
         	up = true;
         }
         if(e.which == 39){
         	right = true;
         }
         if(e.which == 40){
         	down = true;
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var bodyHeight = 480, bodyWidth = 800; 
         var oldTime = 0, newTime, newTimeText, timeMilli, timeSec, timeMin, score;
         var circle1 = sym.$("circle1"), circle2 = sym.$("circle2"), circle3 = sym.$("circle3"), circle4 = sym.$("circle4");
         var circle5 = sym.$("circle5"), circle6 = sym.$("circle6"), circle7 = sym.$("circle7"), circle8 = sym.$("circle8");
         var circle9 = sym.$("circle9"), circle10 = sym.$("circle10"), circle11 = sym.$("circle11"), circle12 = sym.$("circle12");
         var playerCircle = sym.$("playerCircle"), timerText = sym.$("timerText"), startScreen = $("#Stage_startScreen"), introSymbol = $("#Stage_introSymbol");
         hide(timerText);
         hide(playerCircle);
         hide(circle1);
         hide(circle2);
         hide(circle3);
         hide(circle4);
         hide(circle5);
         hide(circle6);
         hide(circle7);
         hide(circle8);
         hide(circle9);
         hide(circle10);
         hide(circle11);
         hide(circle12);
         sym.getSymbol("startScreen").play("start");
         //moveCircleWithMouse();
         $("#Stage_startScreen_playButton")[0].addEventListener("click", function(){startPlaying();}, false);
         $("#Stage_startScreen_submitButton")[0].addEventListener("click", function(){submitScore();}, false);
         $("#Stage_startScreen_scoresButton")[0].addEventListener("click", function(){getScores();}, false);
         $("#Stage_startScreen_backButton")[0].addEventListener("click", function(){introSnel();}, false);
         $("#Stage_startScreen_replayButton")[0].addEventListener("click", function(){replay();}, false);
         //sadsa
         
         function introSnel(){
         	sym.getSymbol("startScreen").play("startSnel");
         }
         function startPlaying(){
         	if(AlreadyPlayed == 0){
         	//console.log(AlreadyPlayed);
         	oldTime = 0;
         	hide(startScreen);
         	hide(introSymbol);
         	show(timerText);
         	show(playerCircle);
         	show(circle1);
         	show(circle2);
         	show(circle3);
         	show(circle4);
         	show(circle5);
         	show(circle6);
         	show(circle7);
         	show(circle8);
         	show(circle9);
         	show(circle10);
         	show(circle11);
         	show(circle12);
         	window.timerInterval = setInterval(function(){ timer(oldTime) }, 10);
         	window.collisionInterval = setInterval(function(){checkForCollision()},5);
         	window.playerCircleInterval = setInterval(function(){movePlayerCircle()},8);
         	window.circle1Interval = setInterval(function(){moveit(circle1)},100);
         	window.circle2Interval = setInterval(function(){moveit(circle2)},100);
         	window.circle3Interval = setInterval(function(){moveit(circle3)},100);
         	window.circle4Interval = setInterval(function(){moveit(circle4)},100);
         	window.circle5Interval = setInterval(function(){moveit(circle5)},100);
         	window.circle6Interval = setInterval(function(){moveit(circle6)},100);
         	window.circle7Interval = setInterval(function(){moveit(circle7)},100);
         	window.circle8Interval = setInterval(function(){moveit(circle8)},100);
         	window.circle9Interval = setInterval(function(){moveit(circle9)},100);
         	window.circle10Interval = setInterval(function(){moveit(circle10)},100);
         	window.circle11Interval = setInterval(function(){moveit(circle11)},100);
         	window.circle12Interval = setInterval(function(){moveit(circle12)},100);
         	//AlreadyPlayed+=1;
         	}
         	if(AlreadyPlayed > 0){
         		location.reload();
         		//AlreadyPlayed = 0;
         	}
         }
         function stopPlaying(){
         	clearInterval(timerInterval);
         	clearInterval(playerCircleInterval);
         	clearInterval(collisionInterval);
         	clearInterval(circle1Interval);
         	clearInterval(circle2Interval);
         	clearInterval(circle3Interval);
         	clearInterval(circle4Interval);
         	clearInterval(circle5Interval);
         	clearInterval(circle6Interval);
         	clearInterval(circle7Interval);
         	clearInterval(circle8Interval);
         	clearInterval(circle9Interval);
         	clearInterval(circle10Interval);
         	clearInterval(circle11Interval);
         	clearInterval(circle12Interval);
         	startScreen.show();
         	sym.getSymbol("startScreen").play("endscreen");
         	AlreadyPlayed+=1;
         }
         function hide(element){
         	element.hide();
         }
         function show(element){
         	element.show();
         }
         //circle keyboard movement
         function movePlayerCircle(){
         	// Keydown/keyup handler:
         	if (up==true) {
         		--yvel;
         		--yvel;
         	 } else if (yvel < 0) {
         		yvel++;
         	 }
         	 if (left==true) {
         	 	--xvel;
         		--xvel;
         	 } else if (xvel < 0) {
         		xvel++;
         	 }
         	 if (right==true) {
         		++xvel;
         		++xvel;
         	 } else if (xvel > 0) {
         		xvel--;
         	 }
         	 if (down==true) {
         		++yvel;
         		++yvel;
         	 } else if (yvel > 0) {
         		yvel--;
         	 }
         	//positie bepalen waar circle naartoe gaat
         	var nextposx = playerCircle.offset().left+xvel/17;
         	var nextposy = playerCircle.offset().top+yvel/17;
         	//playerCircleDiameter = sym.$("playerCircle").css("width");
         	//grenzen bepalen zodat circel er niet uitkan
         	if(nextposy < 0 || nextposy+45 > bodyHeight){
         		//zorgen voor bounce effect wnr circel de rand raakt
         		yvel = Math.round(yvel*-0.4);
         	}
         	if(nextposx < 0 || nextposx+45 > bodyWidth){
         		xvel = Math.round(xvel*-0.4);
         	}
         	playerCircle.css({
         		"top":Math.round(playerCircle.offset().top+yvel/17),"left":Math.round(playerCircle.offset().left+xvel/17)
         	});
         }
         function timer(){
         	newTime = oldTime + 10;
         	score = newTime;
         	oldTime = newTime;
         	timeMilli = newTime / 10;
         	timeSec = Math.floor(newTime / 1000);
         	timeMin = Math.floor(timeSec / 60);
         	timeSec = timeSec % 60;
         	timeMilli = timeMilli % 100;
         	sym.$("timerText")[0].innerHTML = timeMin +":"+timeSec+":"+timeMilli;
         }
         function moveit(circle) {
            var newTop = Math.floor(Math.random()*440);
            var newLeft = Math.floor(Math.random()*760);
         	var newDuration = Math.floor(Math.random()*(5000-1500)+1500);	
            circle.animate({
            	top: newTop,
               left: newLeft,
               }, newDuration, function() {
                 moveit(circle);
               });
         }
         //collision detection
         function distanceBetween(circleA, circleB){
         	circleACenter = [circleA.offset().left+circleA.width()/2,circleA.offset().top+circleA.height()/2];
         	circleBCenter = [circleB.offset().left+circleB.width()/2,circleB.offset().top+circleB.height()/2];
         
         	var distance = Math.sqrt(Math.pow(circleBCenter[0]-circleACenter[0], 2)  + Math.pow(circleBCenter[1]-circleACenter[1], 2));
         	return distance;
         }
         function collisionDetection(circleA, circleB){
         	return distanceBetween(circleA, circleB)<circleA.width()/2+circleB.width()/2;
         }
         function collision(circleA, circleB){
         	if(collisionDetection(circleA, circleB)){
         		stopPlaying();
         	}
         }
         function checkForCollision(){
         	collision(circle1, playerCircle);
         	collision(circle2, playerCircle);
         	collision(circle3, playerCircle);
         	collision(circle4, playerCircle);
         	collision(circle5, playerCircle);
         	collision(circle6, playerCircle);
         	collision(circle7, playerCircle);
         	collision(circle8, playerCircle);
         	collision(circle9, playerCircle);
         	collision(circle10, playerCircle);
         	collision(circle11, playerCircle);
         	collision(circle12, playerCircle);
         }
         function replay(){
         	location.reload();
         }
         function submitScore(){
         	var name = sym.$("#nameTextbox").val();
         	$.post("http://student.howest.be/karel.van.haeverbe1/gameWeb/php/submitscores.php", {"name": name, "score": score});
         	console.log("saved (" + name + ":" + score + ")");
         	location.reload();
         }
         function getScores(){
         			sym.getSymbol("startScreen").play("scores");
         			downloadScores();
         			//AlreadyShowedScores = 1;
         }
         function downloadScores(){
             $.ajax({
                 dataType: "json",
                 url: "http://student.howest.be/karel.van.haeverbe1/gameWeb/php/getscores.php",
                 data: "",
                 success: function(response){
                    console.log(response);
                     scores = response;
                     showScores();
                 }
             });
         }
         function showScores(){
             var l = scores.length;
             if(l > 0){
                 var score;
                 for(var i = 0; i < l; i++){
                     score = scores[i];
                     addScore(score);
                 }
             }
         }
         function addScore(s){
             var bobTheHtmlBuilder = '<li class="scoresList" style="list-style-type:none;margin-left:30px">';
             bobTheHtmlBuilder += '<p style="color:white;font-size:30px;font-family:Helvetica,Sans-Serif;">'+s.name+' : '+s.score+'</p>';
             bobTheHtmlBuilder += '</li>';   
             $(Stage_startScreen_scoresDisplay).append(bobTheHtmlBuilder);
         }
         /*
         function moveCircleWithMouse(){
         	$("#Stage_playerCircle").draggable({drag: function(){checkForCollision();}});
         }
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keyup", function(sym, e) {
         if(e.which == 37){
         	left = false;
         }
         if(e.which == 38){
         	up = false;
         }
         if(e.which == 39){
         	right = false;
         }
         if(e.which == 40){
         	down = false;
         }
         

      });
      //Edge binding end

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'scoresButton'
   (function(symbolName) {   
   
   })("scoresButton");
   //Edge symbol end:'scoresButton'

   //=========================================================
   
   //Edge symbol: 'playButton'
   (function(symbolName) {   
   
   })("playButton");
   //Edge symbol end:'playButton'

   //=========================================================
   
   //Edge symbol: 'startScreen'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         //textbox aan de placeholder toevoegen
         //placeholder ophalen
         var namePlaceholder = $(Stage_startScreen_nameTextBoxPlaceholder);
         
         //console.log(alreadyExists);
         //textbox aanmaken
         // <input type="text" placeholder="Kortrijk" id="searchTextbox" />
         var nameTextbox = $("<input />").attr({
         		'type': 'text',
         		'placeholder' : 'name',
         		'id' : 'nameTextbox' 
         }).css({
         		'width' : '100%',
         		'height' : '100%',
         		'font-size' : '24px'
         });
         
         //textbox aan de placeholder toevoegen
         if(alreadyExists == false){
         	nameTextbox.appendTo(namePlaceholder);
         	alreadyExists = true;
         }
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("startScreen");
   //Edge symbol end:'startScreen'

   //=========================================================
   
   //Edge symbol: 'playerCircle'
   (function(symbolName) {   
   
   })("playerCircleIntro");
   //Edge symbol end:'playerCircleIntro'

   //=========================================================
   
   //Edge symbol: 'introSymbol'
   (function(symbolName) {   
   
   })("introSymbol");
   //Edge symbol end:'introSymbol'

   //=========================================================
   
   //Edge symbol: 'submitButton'
   (function(symbolName) {   
   
   })("submitButton");
   //Edge symbol end:'submitButton'

   //=========================================================
   
   //Edge symbol: 'backButton'
   (function(symbolName) {   
   
   })("backButton");
   //Edge symbol end:'backButton'

   //=========================================================
   
   //Edge symbol: 'replayButton'
   (function(symbolName) {   
   
   })("replayButton");
   //Edge symbol end:'replayButton'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "game");