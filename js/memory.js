/*penser à changer les destinations des images*/
document.addEventListener('DOMContentLoaded', () =>{
	const cardArray = [
	{
		name: 'fries',
		img: 'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png'
	},
	{
		name: 'pizza',
		img: 'images/pizza.png'
	},
	{
		name: 'millshake',
		img: 'images/millshake.png'
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png'
	}
	{
		name: 'fries',
		img: 'images/fries.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png'
	},
	{
		name: 'pizza',
		img: 'images/pizza.png'
	},
	{
		name: 'millshake',
		img: 'images/millshake.png'
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png'
	}
]
	cardArray.sort(() => 0.5 - Math.random())
	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	let cardsChosen = []
	let cardsChosenId = []
	let cardsWon = []

	//create your board
	function createBoard(){
		for (let i = 0; i < cardArray.length; i++){
			const card = document.createElement('img')
			card.setAttribute('src', 'images/blank.png')
			card.setAttribute('dataId', i)
			card.addEventListener('click', flipcard)
			grid.appendChild(card)
		}
	}
	//check for matches
	function checkForMatch(){
		const cards = document.querySelectorAll('img')
		const optionOneId = cardsChosen[0]
		const optionTwoId = cardsChosen[1]

		if(optionOneId == optionTwoId){
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			alert('you have clicked the same image!')
		}
		else if (cardsChosen[0] === cardsChosen[1]){
			alert('You found a match')
			cards[optionOneId].setAttribute('src', 'images/white.png')
			cards[optionTwoId].setAttribute('src', 'images/white.png')
			cards[optionOneId].removeEventListener('click', flipCard)
			cards[optionTwoId].removeEventListener('click', flipCard)
			cardsWon.push(cardsChosen)
		}else{
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			alert('Sorry, try again')
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if (cardsWon.length === cardArray.length/2){
			resultDisplay.textContent = 'Congratulation! You found them all'
		}
	}
	//flip your cards
	function flipCard(){
		let cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if (cardsChosen.length ===2){
			setTimeout(checkForMatch, 500)
		}
	}

	createBoard()
})