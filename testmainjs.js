var i = -1;
var score = 0;
var attempt = 0;
const file= window.location.hash.slice(1,window.location.hash.length);
var s = document.createElement("script");
s.src = file+'.js';
console.log(s);
document.head.appendChild(s);
function loadQuestion()
{	
	$("#ready").hide();
	$("#test").show();
	i++;
	if(i<10){
		attempt = 0;
		var x = document.getElementsByClassName("options");
		x[0].style.background = "#01B1D7";
		x[1].style.background = "#01B1D7";
		x[2].style.background = "#01B1D7";
		x[3].style.background = "#01B1D7";
		document.getElementById("question").innerHTML = questions[i].question;
		document.getElementById("option0").innerHTML = questions[i].options[0];
		document.getElementById("option1").innerHTML = questions[i].options[1];
		document.getElementById("option2").innerHTML = questions[i].options[2];
		document.getElementById("option3").innerHTML = questions[i].options[3];
	}
	else{
		$("#test").hide();
		$("#finish").show();
		$(".score").html(score);
	}
}

function checkAnswer(opt)
{
	var ans = questions[i].answer;

	var x = document.getElementsByClassName("options");
	if(attempt===0){
		if(opt==ans)
		{
			x[opt].style.background = "#4BB543";
			score++;
		}
		else
		{
			x[opt].style.background = "#B33A3A";
			x[ans].style.background = "#4BB543";
		}
		attempt++;
	}
	console.log(score);
	setTimeout(function(){
		loadQuestion();
	},1000);
}

	$(document).ready(function(){
		var x = null;
		var y = null;
		var op = null;
		$("#test").hide();
		$('.click').on("click",function(){
			if($(this).hasClass("btn-primary")){
				if($("input[type=number]").val() === ""){
					alert("Please Enter some value before you proceed");
				}
				else{
					 x = $("input[type=number]").val();
					$("input[type=number]").val("");
					 op = this.id;
				}
			}
			else{
					var z = $("input[type=number]").val() + this.id
					$("input[type=number]").val(z);
			}
			
		});					
		$('.large').on("click", function(){
			if(this.id === 'c'){
				$("input[type=number]").val("");
			}
			else if($("input[type=number]").val()){
				if(op == '+'){
					$("input[type=number]").val(parseInt(x)+parseInt($("input[type=number]").val()));
				}
				else if(op == '-'){
					$("input[type=number]").val(parseInt(x)-parseInt($("input[type=number]").val()));
				}
				else if(op == '*'){
					$("input[type=number]").val(parseInt(x)*parseInt($("input[type=number]").val()));
				}
				else{
					$("input[type=number]").val(parseInt(x)/parseInt($("input[type=number]").val()));
				}
			}
			else{
				alert("Please Enter some value before you proceed");
			}
		});
	});