// Generates a random color in the format of #RRGGBB
function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Changes the background and border color of the box with ID 'box1'
function changeBox1() {
	let box1 = document.getElementById('box1');
	box1.style.backgroundColor = getRandomColor();
	box1.style.border = `4px ${getRandomColor()} solid`;
}

// Changes the background and border color of the box with ID 'box2'
function changeBox2() {
	let box2 = document.getElementById('box2');
	box2.style.backgroundColor = getRandomColor();
	box2.style.border = `4px ${getRandomColor()} dashed`;
}

// Changes the background and border color of the box with ID 'box3'
function changeBox3() {
	let box3 = document.getElementById('box3');
	box3.style.backgroundColor = getRandomColor();
	box3.style.border = `4px ${getRandomColor()} solid`;
}

// Changes the background and border color of all boxes
function changeAllBoxes() {
	changeBox1();
	changeBox2();
	changeBox3();
}

// Hides the box with ID 'box1' without collapsing its space
function hideBox1() {
	let box1 = document.getElementById('box1');
	box1.style.visibility = "hidden";
}

// Hides the box with ID 'box2' without collapsing its space
function hideBox2() {
	let box2 = document.getElementById('box2');
	box2.style.visibility = "hidden";
}

// Hides the box with ID 'box3' without collapsing its space
function hideBox3() {
	let box3 = document.getElementById('box3');
	box3.style.visibility = "hidden";
}

// Hides all boxes without collapsing their space
function hideAllBoxes() {
	hideBox1();
	hideBox2();
	hideBox3();
}

// Resets the colors and borders of all boxes to their original state
function resetColors() {
	let box1 = document.getElementById("box1");
	box1.style.backgroundColor = "red";
	box1.style.border = "4px black solid";
	
	let box2 = document.getElementById("box2");
	box2.style.backgroundColor = "blue";
	box2.style.border = "4px yellow dashed";
	
	let box3 = document.getElementById("box3");
	box3.style.backgroundColor = "green";
	box3.style.border = "4px pink solid";
}

// Makes all hidden boxes visible again
function showAllBoxes() {
	let box1 = document.getElementById("box1");
	let box2 = document.getElementById("box2");
	let box3 = document.getElementById("box3");
	
	box1.style.visibility = "visible";
	box2.style.visibility = "visible";
	box3.style.visibility = "visible";
}
