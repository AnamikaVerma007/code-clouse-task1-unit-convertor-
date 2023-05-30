// hide output
// document.querySelector('#output').style.display="none";
// document.querySelector('#output').style.visibility="hidden";
// Select input field
var input = document.querySelector("#input");

// Catch user input
document.querySelector('#inputValue').addEventListener('input', convert);
// Select unit selections
var unit = document.querySelector("#unit");

// Catch unit selection
document.querySelector('#unit').addEventListener('input', convert);
// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);

function convert(e)
function convert() {

	// Test the function is called
	// console.log("function is called");
    // Get value of user input and units
    var value = input.value;
    var unitValue = unit.value;
    var output = document.querySelector("#output");

	// Get user input value
	let input = document.querySelector('#inputValue').value
	// let input = e.target.value;
	// console.log(input);
    // Show output when there is a value
    if(value !== "") {
        output.style.display = "block";
    } else {
        output.style.display = "none";
    }

	// Get user's unit selection
	let unit = document.querySelector('#unit').value;
	// console.log(unit);
    // check unit type
    switch(unitValue) {
        case "lbs":
            convertLbs(value);
            break;
        case "grams":
            convertGrams(value);
            break;
        case "kilograms":
            break;
        case "ounces":
            break;
        case "meters":
            break;
        case "miles":
            break;
        case "inches":
            break;
    }
}  

	// check the unit value
	switch(unit){
		case 'lbs':
			convertLbs(input);
			break;
		case 'grams':
			convertGrams(input);
			break;
		case 'kilograms':
			convertGrams(input);
			break;
		case 'meters':
			convertMeters(input);
			break;
	}
var card1 = document.querySelector("#card-1");
var card2 = document.querySelector("#card-2");
var card3 = document.querySelector("#card-3");

	//Show output
	// document.querySelector('#output').style.display="block";
	// document.querySelector('#output').style.visibility="visible";
function convertLbs(value) {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Kilograms:"
    card3.querySelector('h4').textContent="Ounces:"

	// // pounds to grams
	// document.querySelector('#gram').innerHTML = input * 453.592;

	// // Pounds to kilograms
	// document.querySelector('#kg').innerHTML = input * 453.592 / 1000;

	// // Piunds to ounces
	// document.querySelector('#oz').innerHTML = input * 16;
    card1.querySelector('div').textContent= value * 453.592
    card2.querySelector('div').textContent= value * 453.592 / 1000
    card3.querySelector('div').textContent= value * 16
}

function convertLbs(num) {
	console.log('Value is: ' + num);
	document.querySelector('#output').innerHTML =
			// Grams
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
					'<h4>Grams:</h4>' +
					'<div>' + num * 453.592 +'</div>' +
				'</div>' +
			'</div>' +
			// Kilograms
			'<div class="card bg-success mb-2">' +
				'<div class="card-header">' +
					'<h4>Kilograms:</h4>' +
					'<div>'+ num * 453.592 / 1000 +'</div>' +
				'</div>' +
			'</div>' +
			// Ounces
			'<div class="card bg-danger">' +
				'<div class="card-header">' +
					'<h4>Ounces:</h4>' +
					'<div>' + num * 16 +'</div>' +
				'</div>' +
			'</div>' 
}

function convertGrams(num) {
	document.querySelector('#output').innerHTML =
			// Grams
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
					'<h4>Pounds:</h4>' +
					'<div>' + num * 0.00220462 +'</div>' +
				'</div>' +
			'</div>' +
			// Kilograms
			'<div class="card bg-success mb-2">' +
				'<div class="card-header">' +
					'<h4>Kilograms:</h4>' +
					'<div>'+ num / 1000 +'</div>' +
				'</div>' +
			'</div>' +
			// Ounces
			'<div class="card bg-danger">' +
				'<div class="card-header">' +
					'<h4>Ounces:</h4>' +
					'<div>' + num * 0.035274 +'</div>' +
				'</div>' +
			'</div>' 
}
function convertGrams(value) 
    card1.querySelector('h4').textContent="kilograms:"
    card2.querySelector('h4').textContent="Ounces:"
    card3.querySelector('h4').textContent="Lbs:"

function convertMeters(num){
	document.querySelector('#output').innerHTML =
			// Miles
			'<div class="card bg-primary mb-2">' +
				'<div class="card-header">' +
					'<h4>Miles:</h4>' +
					'<div>' + num * 0.000621371 +'</div>' +
				'</div>' +
			'</div>' +
			// Inches
			'<div class="card bg-success mb-2">' +
				'<div class="card-header">' +
					'<h4>Inches:</h4>' +
					'<div>'+ num * 39.370066559999998 +'</div>' +
				'</div>' +
			'</div>'
    card1.querySelector('div').textContent= value * 1000;
    card2.querySelector('div').textContent= value * 0.035274;
    card3.querySelector('div').textContent= value * 0.00220462;
}