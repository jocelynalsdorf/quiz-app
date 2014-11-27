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
	 correctAns: 1},

	 {question: "What candy bar claims to decrease your hunger effectively?",
	 choices: ["Almond Joy","Payday","M&Ms", "Snickers"],
	 quesNum: 2,
	 correctAns: 3},

	{question: "Which of the following do not have a peanut butter version available?",
	 choices: ["Twix", "Kit Kat", "Snickers", "Milky Way"],
	 quesNum: 3,
	 correctAns: 3},

	{question: "Which candy has a slogan that invites you to \"taste\" an element of nature:",
	 choices: ["Starburst", "Twizzlers", "Jolly Rancher", "Skittles"],
	 quesNum: 4,
	 correctAns: 3},

	 ];

	/*-----global var----------------*/


	 var numCorrect = 0;
	 var currentQuestion = 0;


	 /*-----get radio input value on click of submit btn----------------*/

	 $(".submit-btn").on("click", function() {
	 //alert("hey");
	 updateCount();
	 currentQuestion++;
	 });

	

	function updateCount() {
		var answer = $("input[type='radio']:checked").val();
		if(answer == questions[currentQuestion].correctAns) {
			//alert("yep");
		numCorrect++;
		$(".feedback-button").addClass("hide-element");
 		$(".feedback-correct").removeClass("hide-element");
			}
		else {
		$(".feedback-button").addClass("hide-element");
 		$(".feedback-wrong").removeClass("hide-element");
			}
		}
	

	});