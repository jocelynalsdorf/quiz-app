$(document).ready(function() {


/*--- Display information modal box ---*/
  	$(".what").click(function() {
    	$(".instructions").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".instructions").fadeOut(1000);
  	});





	/*-----the quiz questions------*/
	var questions = [
  
	{question: "The Mars Chocolate company does NOT make which of the following candy bars:",
	 choices: ["Twix", "Kit Kat", "M&Ms", "3 Musketeers"],
	 quesNum: 1,
	 correctAns: "1"},

	 {question: "What candy bar claims to decrease your hunger effectively?",
	 choices: ["Almond Joy","Payday","M&Ms", "Snickers"],
	 quesNum: 2,
	 correctAns: "3"},

	{question: "Which of the following do not have a peanut butter version available?",
	 choices: ["Twix", "Kit Kat", "Snickers", "Milky Way"],
	 quesNum: 3,
	 correctAns: "3"},

	{question: "Which candy has a slogan that invites you to \"taste\" an element of nature:",
	 choices: ["Starburst", "Twizzlers", "Jolly Rancher", "Skittles"],
	 quesNum: 4,
	 correctAns: "3"},

	 ];

	/*-----global var----------------*/


	 var numCorrect = 0;
	 var currentQuestion = 0;



	 /*-----get radio input value on click of submit btn----------------*/

	 
	
	$(".submit-btn").on("click", function(event) {
	 event.preventDefault();
	 updateCount();
	 currentQuestion++;
	});
	

	

	function updateCount() {
	var answer = $('input[name="question-option"]:checked').val();
		
	if(answer == questions[currentQuestion].correctAns) {

	numCorrect++;
	$(".feedback-button").addClass("hide-element");
 	$(".feedback-correct").removeClass("hide-element");
	}
	else {
	$(".feedback-button").addClass("hide-element");
 	$(".feedback-wrong").removeClass("hide-element");
		}
	}


		
	$(".fa-arrow-right").on("click", function() {
    
    if(currentQuestion == 1) {		
	$(".quest-one").remove();
	$(".quest-two").show();
	$(".feedback-correct").addClass("hide-element");
	$(".feedback-wrong").addClass("hide-element");
	$(".feedback-button").removeClass("hide-element");	
		}

	else if(currentQuestion == 2) {
	$(".quest-two").remove();
	$(".quest-three").show();
	$(".feedback-correct").addClass("hide-element");
	$(".feedback-wrong").addClass("hide-element");
	$(".feedback-button").removeClass("hide-element");
			
		}
	else if(currentQuestion == 3) {		
	$(".quest-three").remove();
	$(".quest-four").show();		
	$(".feedback-correct").addClass("hide-element");
	$(".feedback-wrong").addClass("hide-element");
	$(".feedback-button").removeClass("hide-element");
		}
	else if(currentQuestion == 4) {			
	$(".quest-four").remove();
	$(".feedback-correct").addClass("hide-element");
	$(".feedback-wrong").addClass("hide-element");
	$(".feedback-button").removeClass("hide-element");
	alert("game over");
		}
	
	});

	});