let calcDisplay = document.getElementById('calc-display');
let resultDisplay = document.getElementById('result-display');

// creates display function that reacts to button press 
function display(num) {
	calcDisplay.innerText += num;
}

// creates all clear function that deletes calculations and sets result to 0
function allClear() {
	calcDisplay.innerHTML = "";
	resultDisplay.innerHTML = "0";
}

// creates function that deletes one character from display
function del() {
	calcDisplay.innerText = calcDisplay.innerText.slice(0,-1);
}

//creates function that evaluates calc display and shows in results
function calculate() {
	resultDisplay.innerText = eval(calcDisplay.innerText);
}