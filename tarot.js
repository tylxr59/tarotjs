/*
	tarotjs v1.1 - https://github.com/tylxr59/tarotjs
	Licensed under WTFPL
	
	Takes the numerical placement of the card and returns the location and card
	By default, putCard writes the card in the the element w/ ID of the location/placement
	
	Example:
	<a href="#" onClick="tarotjs('0');" id="0">Pull a Card</a>
*/ 
const cards = []; // Card storage that exists between generations

function tarotjs(location) {
	const majorArcana = ["The Fool","The Magician","The High Priestess","The Empress","The Emperor","The Hierophant","The Lovers","The Chariot","Strength","The Hermit","Wheel of Fortune","Justice","The Hanged Man","Death","Temperance","The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World"];
	
	var suit = Math.floor(Math.random() * 5); // Generate the suit number
	
	if (suit == 0) { // If it's a Major Arcana card...
		var cardNum = Math.floor(Math.random() * 22); // ...select one of the 22
	} else {
		var cardNum = Math.floor(Math.random() * 14)+1; // Otherwise, generate the regular card number, offset by +1 b/c computers
	}
	
	var cardID = (suit * 100) + cardNum; // Generate the ID of the card to compare against
	
	if (!cards.includes(cardID)) { // If card isn't in the array (it hasn't been pulled yet)...
		cards[location] = cardID; // ...put it in the array...
		
		// Select the orientation of the card
		if (Math.floor(Math.random() * 2) == 0) {
			var orientation = "Upright";
		} else {
			var orientation = "Reversed";
		}
		
		// Face or Ace check (if its not a Major Arcana)
		if (suit != 0 && (cardNum > 10 || cardNum == 1)) {
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
		
		// Make it human-readable
		switch (suit) {
			case 0:
				// Major Arcana
				var theCard = majorArcana[cardNum] + " (" + orientation + ")";
				break;
			case 1:
				// Cups
				var theCard = cardNum + " of Cups (" + orientation + ")";
				break;
			case 2:
				// Swords
				var theCard = cardNum + " of Swords (" + orientation + ")";
				break;
			case 3:
				// Pentacles
				var theCard = cardNum + " of Pentacles (" + orientation + ")";
				break;
			case 4:
				// Wands
				var theCard = cardNum + " of Wands (" + orientation + ")";
				break;
		}
		
		putCard(location,theCard); // ...and process it
	} else {
		tarotjs(location); // Otherwise, try again
	}
}

// Do something with the card
function putCard(location, theCard) {
	document.getElementById(location).innerHTML = theCard;
}