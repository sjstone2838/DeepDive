$(document).ready(function(){
	/* increment login count to 1 in views.py, so that welcome does not reappear on refresh
	$.ajax({
        type: 'POST',
        url: '/lessons/increment_logins/',
	});
	*/

	var welcomeIndex = 0;

	function showOrientation(){
		$(".welcomeBackground").css("z-index","2").fadeIn(2000);
		$(".welcomeBlock").css("z-index","2").fadeIn(2000);
		console.log("line1");
	}

	showOrientation();

	$("#courseHelp").click(function(){
		showOrientation();
		$("#welcomeCloseBox").fadeIn(2000);
	});

	$('#welcomeCloseBox').click(function(){
		$(".highlight").css("border","none");
		$("#welcomeCloseBox").fadeOut("slow");
		$(".welcomeBlock").fadeOut("slow");
		$(".welcomeBackground").fadeOut("slow");
		welcomeIndex = 0;
	});

	$('.endWelcome').click(function(){
		$(".highlight").css("border","none");
		$("#welcomeCloseBox").fadeOut("slow");
		$(".welcomeBlock").fadeOut("slow");
		$(".welcomeBackground").fadeOut("slow");
		welcomeIndex = 0;
	});

	// SHIFT RIGHT
	$("#nextBtn").click(function(){
		$("#indexBall-" + welcomeIndex).removeClass("indexBallHighlight");
		//$("#welcomeBlock-" + welcomeIndex).toggle("slide", {direction:'left'}) // For slide action; requires jQuery-UI
		$("#welcomeBlock-" + welcomeIndex).addClass("Hide");
		console.log("before:" + welcomeIndex);
		welcomeIndex ++;
		welcomeIndex = welcomeIndex % 10;
		console.log("after:" + welcomeIndex);
		//$("#welcomeBlock-" + welcomeIndex).delay(300).toggle("slide", {direction:'right'}); // For slide action; requires jQuery-UI
		$("#welcomeBlock-" + welcomeIndex).removeClass("Hide");
		$("#indexBall-" + welcomeIndex).addClass("indexBallHighlight")
	});

	//SHIFT LEFT
	$("#backBtn").click(function(){
		$("#indexBall-" + welcomeIndex).removeClass("indexBallHighlight");
		//$("#welcomeBlock-" + welcomeIndex).toggle("slide", {direction:'left'}) // For slide action; requires jQuery-UI
		$("#welcomeBlock-" + welcomeIndex).addClass("Hide");
		console.log("before:" + welcomeIndex);
		welcomeIndex --;
		if (welcomeIndex == -1){
			welcomeIndex = 9;
		}
		console.log("after:" + welcomeIndex);
		//$("#welcomeBlock-" + welcomeIndex).delay(300).toggle("slide", {direction:'right'}); // For slide action; requires jQuery-UI
		$("#welcomeBlock-" + welcomeIndex).removeClass("Hide");
		$("#indexBall-" + welcomeIndex).addClass("indexBallHighlight")
	});
});