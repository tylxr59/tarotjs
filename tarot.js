const cards = [];

function genCard(x) {
	var suit = Math.floor(Math.random() * 5);
	var cardNum = Math.floor(Math.random() * 14)+1;
	var cardID = (suit * 100) + cardNum;
	
	if (Math.floor(Math.random() * 2) == 0) {
		var orientation = "Upright";
	} else {
		var orientation = "Reversed";
	}
	
	checkCard(x,suit,cardNum,cardID,orientation);
}

function checkCard(x,suit,cardNum,cardID,orientation) {
	if (cards.includes(x)) {
		genCard(x);
	} else {
		putCard(x,suit,cardNum,cardID,orientation);
	}
}

function putCard(x,suit,cardNum,cardID,orientation) {
	const majorArcana = ["The Fool","The Magician","The High Priestess","The Empress","The Emperor","The Hierophant","The Lovers","The Chariot","Strength","The Hermit","Wheel of Fortune","Justice","The Hanged Man","Death","Temperance","The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World"];
	
	if (cardNum > 10 || cardNum == 1) {
		switch (cardNum) {
			case 1:
				cardNum = "Ace";
				break;
			case 11:
				cardNum = "Page";
				break;
			case 12:
				cardNum = "Knight";
				break;
			case 13:
				cardNum = "Queen";
				break;
			case 14:
				cardNum = "King";
				break;
		}
	}
	
	switch (suit) {
		case 0:
			document.getElementById(x).innerHTML = majorArcana[Math.floor(Math.random() * 22)] + " (" + orientation + ")";
			break;
		case 1:
			// Cups
			document.getElementById(x).innerHTML = cardNum + " of Cups (" + orientation + ")";
			break;
		case 2:
			// Swords
			document.getElementById(x).innerHTML = cardNum + " of Swords (" + orientation + ")";
			break;
		case 3:
			// Pentacles
			document.getElementById(x).innerHTML = cardNum + " of Pentacles (" + orientation + ")";
			break;
		case 4:
			// Wands
			document.getElementById(x).innerHTML = cardNum + " of Wands (" + orientation + ")";
			break;
	}
}