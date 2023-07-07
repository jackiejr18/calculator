let calcDisplay = document.getElementById('calc-display');
let resultDisplay = document.getElementById('result-display');

// creates display function that reacts to button press 
function display(num) {
	calcDisplay.innerText += num;
}

