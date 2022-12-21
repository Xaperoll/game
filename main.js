let card = 0,
start = false,
over = false,
money = 0,
game = document.getElementById('game');
button = document.getElementById('button');


function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function startGame() {
	if(button.innerHTML == "Начать игру"){
		button.innerHTML = "Выберите карту";
		game.style.opacity = "1";
		start = true;
	} else if(button.innerHTML == "Новая игра") {
		newGame();
	} else if(button.innerHTML == "Забрать приз") {
		finishGame();
	}
}

function finishGame() {
	location.reload()
}

function newGame() {
	location.reload()
}

function chooseСard(object) {
	if(over == false && start == true) {
	card = getRandomInt(3);
	if(card == 0) {
		object.src = "card_10.png";
		money = money + 10;
	}
	else if(card == 1) {
		object.src = "card_5.png";
		money = money + 5;
	}
	else if(card == 2) {
		object.src = "card_0.png";
		money = 0;
	}
	button.innerHTML = "Забрать приз";
	object.onclick = "";
	if(card == 2) {
		over = true;
		button.innerHTML = "Новая игра";
		game.style.opacity = "0.25";
	}
	}
}