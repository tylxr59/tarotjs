/*
	tarotjs v3 - https://github.com/tylxr59/tarotjs
	Code licensed under MIT License - https://opensource.org/licenses/MIT
	
	Rider-Waite-Smith Card Scans by Steve - https://steve-p.org/cards/RWSa.html (High res versions available at his website)
*/ 
const cards = [];

const majorArcana = ["Fool","Magician","High Priestess","Empress","Emperor","Hierophant","Lovers","Chariot","Strength","Hermit","Wheel of Fortune","Justice","Hanged Man","Death","Temperance","Devil","Tower","Star","Moon","Sun","Judgement","World"];
const suits = ["Major Arcana", "Cups", "Swords", "Pentacles", "Wands"];
const numbers = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];

function tarotjs(location) {
	const suitIndex = Math.floor(Math.random() * suits.length);
	const isMajorArcana = suitIndex === 0;
	const cardNum = isMajorArcana ? Math.floor(Math.random() * 22) : Math.floor(Math.random() * 14) + 1;
	const cardID = (suitIndex * 100) + cardNum;

	if (!cards.includes(cardID)) {
		cards[location] = cardID;
		const orientation = Math.floor(Math.random() * 2) === 0 ? "Upright" : "Reversed";
		let cardName = cardNum;

		if (!isMajorArcana) {
			cardName = numbers[cardNum-1];
		}

		const theCard = isMajorArcana ? `The ${majorArcana[cardNum]} (${orientation})` : `${cardName} of ${suits[suitIndex]} (${orientation})`;
		putCard(location, theCard, cardID, orientation);
		// or return(theCard, cardID, orientation) or something to that affect
	} else {
		tarotjs(location);
	}
}

function putCard(location, theCard, cardID, orientation) {
	// Do something with the card
	// Example: document.getElementById(location).innerHTML = `<img class="${orientation.toLowerCase()} card" src="cards/${cardID}.jpg" width="272" height="453"><br><br>${theCard}`;
}