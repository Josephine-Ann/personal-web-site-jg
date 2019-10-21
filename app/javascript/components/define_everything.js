const startButton = document.querySelector(".start-button");
const nextRoundButton = document.querySelector(".next-button");
const nextCardButton = document.querySelector(".new-card-button");
const checkboxes = document.querySelectorAll(".myCheck");

const flipButton = document.querySelector(".flip-button");
const flipcard = document.querySelector(".flip-card");
const flipcards = document.querySelectorAll(".flip-card-front");
const flipcardsBack = document.querySelectorAll(".flip-card-back");
const randomCard = Array.from(flipcards);
const randomCardBack = Array.from(flipcardsBack);

let randomCardOne = randomCard[0];
let randomCardOneBack = randomCardBack[0];

const range = [...Array(17).keys()];


randomCard.splice(2, 0, randomCardOne);
randomCard.splice(4, 0, randomCardOne);
randomCard.splice(6, 0, randomCardOne);
randomCard.splice(8, 0, randomCardOne);
randomCard.splice(10, 0, randomCardOne);
randomCard.splice(12, 0, randomCardOne);
randomCard.splice(14, 0, randomCardOne);
randomCard.splice(16, 0, randomCardOne);
randomCardBack.splice(2, 0, randomCardOneBack);
randomCardBack.splice(4, 0, randomCardOneBack);
randomCardBack.splice(6, 0, randomCardOneBack);
randomCardBack.splice(8, 0, randomCardOneBack);
randomCardBack.splice(10, 0, randomCardOneBack);
randomCardBack.splice(12, 0, randomCardOneBack);
randomCardBack.splice(14, 0, randomCardOneBack);
randomCardBack.splice(16, 0, randomCardOneBack);

// // function createRepetitionMainCard(range) {
// //   if (range % 2 === 0) {
// //     randomCard.splice(range, 0, randomCardOne);
// //     randomCardBack.splice(range, 0, randomCardOneBack);
// //   }
// // }

// // range.forEach(createRepetitionMainCard);

  let sequenceCardOne = randomCard[0];
  let sequenceCardTwo = randomCard[1];
  let sequenceCardFour = randomCard[3];
  let sequenceCardSix = randomCard[5];
  let sequenceCardEight = randomCard[7];
  let sequenceCardTen = randomCard[9];
  let sequenceCardTwelve = randomCard[11];
  let sequenceCardFourteen = randomCard[13];
  let sequenceCardSixteen = randomCard[15];
  let sequenceCardOneBack = randomCardBack[0];
  let sequenceCardTwoBack = randomCardBack[1];
  let sequenceCardFourBack = randomCardBack[3];
  let sequenceCardSixBack = randomCardBack[5];
  let sequenceCardEightBack = randomCardBack[7];
  let sequenceCardTenBack = randomCardBack[9];
  let sequenceCardTwelveBack = randomCardBack[11];
  let sequenceCardFourteenBack = randomCardBack[13];
  let sequenceCardSixteenBack = randomCardBack[15];


let accumulator = 1;

function checkboxesChecked() {
    checkboxes.forEach(checkbox => {
  checkbox.addEventListener( 'click', function() {
  const randomCardZero = randomCard[0];
  const randomCardZeroBack = randomCardBack[0];
  const randomCardUno = randomCard[accumulator];
  const randomCardUnoBack = randomCardBack[accumulator];
  sequenceCardOne.classList.remove("keyFrameDiv");
  sequenceCardTwo.classList.remove("keyFrameDivTwo");
  sequenceCardFour.classList.remove("keyFrameDivThree");
  sequenceCardSix.classList.remove("keyFrameDivFour");
  sequenceCardEight.classList.remove("keyFrameDivFive");
  sequenceCardTen.classList.remove("keyFrameDivSix");
  sequenceCardTwelve.classList.remove("keyFrameDivSeven");
  sequenceCardFourteen.classList.remove("keyFrameDivEight");
  sequenceCardSixteen.classList.remove("keyFrameDivNine");
  sequenceCardOneBack.classList.remove("keyFrameDivCopy");
  sequenceCardTwoBack.classList.remove("keyFrameDivTwoCopy");
  sequenceCardFourBack.classList.remove("keyFrameDivThreeCopy");
  sequenceCardSixBack.classList.remove("keyFrameDivFourCopy");
  sequenceCardEightBack.classList.remove("keyFrameDivFiveCopy");
  sequenceCardTenBack.classList.remove("keyFrameDivSixCopy");
  sequenceCardTwelveBack.classList.remove("keyFrameDivSevenCopy");
  sequenceCardFourteenBack.classList.remove("keyFrameDivEightCopy");
  sequenceCardSixteenBack.classList.remove("keyFrameDivNineCopy");
  randomCard.splice(accumulator, 1, randomCardZero);
  randomCard.splice(0, 1, randomCardUno);
  randomCard.splice(2, 1, randomCardUno);
  randomCard.splice(4, 1, randomCardUno);
  randomCard.splice(6, 1, randomCardUno);
  randomCard.splice(8, 1, randomCardUno);
  randomCard.splice(10, 1, randomCardUno);
  randomCard.splice(12, 1, randomCardUno);
  randomCard.splice(14, 1, randomCardUno);
  randomCard.splice(16, 1, randomCardUno);
  randomCardBack.splice(accumulator, 1, randomCardZeroBack);
  randomCardBack.splice(0, 1, randomCardUnoBack);
  randomCardBack.splice(2, 1, randomCardUnoBack);
  randomCardBack.splice(4, 1, randomCardUnoBack);
  randomCardBack.splice(6, 1, randomCardUnoBack);
  randomCardBack.splice(8, 1, randomCardUnoBack);
  randomCardBack.splice(10, 1, randomCardUnoBack);
  randomCardBack.splice(12, 1, randomCardUnoBack);
  randomCardBack.splice(14, 1, randomCardUnoBack);
  randomCardBack.splice(16, 1, randomCardUnoBack);
  accumulator += 2;
  sequenceCardOne = randomCard[0];
  sequenceCardTwo = randomCard[1];
  sequenceCardFour = randomCard[3];
  sequenceCardSix = randomCard[5];
  sequenceCardEight = randomCard[7];
  sequenceCardTen = randomCard[9];
  sequenceCardTwelve = randomCard[11];
  sequenceCardFourteen = randomCard[13];
  sequenceCardSixteen = randomCard[15];
  sequenceCardOneBack = randomCardBack[0];
  sequenceCardTwoBack = randomCardBack[1];
  sequenceCardFourBack = randomCardBack[3];
  sequenceCardSixBack = randomCardBack[5];
  sequenceCardEightBack = randomCardBack[7];
  sequenceCardTenBack = randomCardBack[9];
  sequenceCardTwelveBack = randomCardBack[11];
  sequenceCardFourteenBack = randomCardBack[13];
  sequenceCardSixteenBack = randomCardBack[15];
})});
}

const myFunctionStart = () => {
  startButton.addEventListener("click", (event) => {
  sequenceCardOne.classList.add("keyFrameDiv");
  sequenceCardTwo.classList.add("keyFrameDivTwo");
  sequenceCardFour.classList.add("keyFrameDivThree");
  sequenceCardSix.classList.add("keyFrameDivFour");
  sequenceCardEight.classList.add("keyFrameDivFive");
  sequenceCardTen.classList.add("keyFrameDivSix");
  sequenceCardTwelve.classList.add("keyFrameDivSeven");
  sequenceCardFourteen.classList.add("keyFrameDivEight");
  sequenceCardSixteen.classList.add("keyFrameDivNine");
  sequenceCardOneBack.classList.add("keyFrameDivCopy");
  sequenceCardTwoBack.classList.add("keyFrameDivTwoCopy");
  sequenceCardFourBack.classList.add("keyFrameDivThreeCopy");
  sequenceCardSixBack.classList.add("keyFrameDivFourCopy");
  sequenceCardEightBack.classList.add("keyFrameDivFiveCopy");
  sequenceCardTenBack.classList.add("keyFrameDivSixCopy");
  sequenceCardTwelveBack.classList.add("keyFrameDivSevenCopy");
  sequenceCardFourteenBack.classList.add("keyFrameDivEightCopy");
  sequenceCardSixteenBack.classList.add("keyFrameDivNineCopy");
});
};

const card = document.querySelectorAll('.card');

const flipCardFlips = () => {
card.forEach(card => card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  sequenceCardOne.classList.remove("keyFrameDiv");
  sequenceCardTwo.classList.remove("keyFrameDivTwo");
  sequenceCardFour.classList.remove("keyFrameDivThree");
  sequenceCardSix.classList.remove("keyFrameDivFour");
  sequenceCardEight.classList.remove("keyFrameDivFive");
  sequenceCardTen.classList.remove("keyFrameDivSix");
  sequenceCardTwelve.classList.remove("keyFrameDivSeven");
  sequenceCardFourteen.classList.remove("keyFrameDivEight");
  sequenceCardSixteen.classList.remove("keyFrameDivNine");
  sequenceCardOneBack.classList.remove("keyFrameDivCopy");
  sequenceCardTwoBack.classList.remove("keyFrameDivTwoCopy");
  sequenceCardFourBack.classList.remove("keyFrameDivThreeCopy");
  sequenceCardSixBack.classList.remove("keyFrameDivFourCopy");
  sequenceCardEightBack.classList.remove("keyFrameDivFiveCopy");
  sequenceCardTenBack.classList.remove("keyFrameDivSixCopy");
  sequenceCardTwelveBack.classList.remove("keyFrameDivSevenCopy");
  sequenceCardFourteenBack.classList.remove("keyFrameDivEightCopy");
  sequenceCardSixteenBack.classList.remove("keyFrameDivNineCopy");
}))
};

export { checkboxesChecked, myFunctionStart, flipCardFlips };

