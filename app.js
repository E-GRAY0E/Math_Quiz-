let firstnum = document.getElementById("firstnum");
firstnum.innerHTML = Math.floor(Math.random()*21);

let secondnum = document.getElementById("secondnum");
secondnum.innerHTML = Math.floor(Math.random()*21);

let cnt = 1;

let correct = 0;

let cntText = document.getElementById("counter")
cntText.innerHTML = `Question ${cnt} of 10`;

function runGame() {
	let ui = document.getElementById("userinput").value;
	let n1 = parseInt(document.getElementById("firstnum").textContent);
	let n2 = parseInt(document.getElementById("secondnum").textContent);
	const ans = document.getElementById("answer");
	console.log(ui, n1 + n2);	
	
	if(ui == n1 + n2) {
		ans.style.color = "green";
		resArr = ["Way to go!", "Correct Answer!", "Thundercats Ho!", "Super Math Hero!", "That's correct!", "Unstoppable!", "Good Answer!", "Nice One!"];
		randEle = Math.floor(Math.random()*resArr.length);
		correct++
		return	document.getElementById("answer").innerHTML = resArr[randEle];

	} else {
		ans.style.color = "red";
		return document.getElementById("answer").innerHTML = `You answered ${ui}, try again`;
	};
};

function nextQ() {
	let ui = document.getElementById("userinput").value;

	if(ui == ''){
	return alert("Please enter your answer in the gray text box");
	} else if(cnt < 10){

	firstnum.innerHTML = Math.floor(Math.random()*21);
	secondnum.innerHTML = Math.floor(Math.random()*21);
	
	document.getElementById("userinput").value = '';
	document.getElementById("answer").innerHTML = '';

	cnt++
	
	cntText.innerHTML = `Question ${cnt} of 10`;
	}else if(cnt == 10 && document.getElementById("next").innerHTML == 'Next Question'){

	document.getElementById("next").innerHTML = 'See Results';

	}else if(cnt == 10 && document.getElementById("next").innerHTML == 'See Results'){
	
	document.getElementById("answer").innerHTML = `You have answered ${correct} of 10 correctly, keep at it!`;
	};

	console.log(correct);
};
