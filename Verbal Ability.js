var questions = [
	{
		question: "If you smuggle goods into the country, they may be ...... by the customs authority.",
		options: ["possessed", "punished", "confiscated", "fined"],
		answer: 2,
	},
	{
		question: "When he <br> P: did not know <br> Q: he was nervous and <br> R: heard the hue and cry at midnight <br> S: what to do <br> The Proper sequence should be:-",
		options: ["RQPS", "QSPR", "SQPR", "PQRS"],
		answer: 0,
	},
	{
		question: "Choose the correctly spelt word:-",
		options: ["Ommineous", "Omineous", "Ominous", "Omenous"],
		answer: 2,
	},
	{
		question: "The meaning of the phrase 'To have an axe to grind' is:-",
		options: ["A private end to serve", "To fail to arouse interest", "To have no result", "To work for both sides"],
		answer: 0,
	},
	{
		question: "The one word substitute for 'That which cannot be corrected' is:-",
		options: ["Unintelligible", "Indelible", "Illegible", "incorrigable"],
		answer: 3,
	},
	{
		question: "The synonym of 'CANNY' is:-",
		options: ["Obstinate", "Handsome" ,"Clever", "Stout"],
		answer: 2,
	},
	{
		question: "The antonym of 'RELINQUISH' is:-",
		options: ["Abdicate", "Renounce" ,"Possess", "Deny"],
		answer: 2,
	},
	{
		question: "Correct the sentence: 'He is too important FOR TOLERATING any delay.'",
		options: ["to tolerate", "to tolerating" ,"at tolerating", "with tolerating"],
		answer: 0,
	},
	{
		question: "Select the pair which has the same relationship as 'LIGHT:BLIND'",
		options: ["SPEECH:DUMB", "LANGUAGE:DEAF" ,"TONGUE:SOUND", "VOICE:VIBRATION"],
		answer: 0,
	},
	{
		question: "Choose the correct alternative for the highlighted text in the sentence 'IF THE ROOM HAD BEEN BRIGHTER, I would have been able to read for a while before bed time.'",
		options: ["If the room was brighter", "If the room are brighter" ,"Had the room been brighter", "Has the room been brighter"],
		answer: 2,
	},
];
var i = -1;
var attempt = 0;

function loadQuestion()
{
	i++;
	attempt = 0;
	var x = document.getElementsByClassName("option");
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

function checkAnswer(opt)
{
	var ans = questions[i].answer;
	var x = document.getElementsByClassName("option");
	if(attempt==0)
	{
		if(opt==ans)
		{
			x[opt].style.background = "#4BB543";
		}
		else
		{
			x[opt].style.background = "#B33A3A";
			x[ans].style.background = "#4BB543";
		}
		attempt++;
	}
}