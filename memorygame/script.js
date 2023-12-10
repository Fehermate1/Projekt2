document.addEventListener("DOMContentLoaded", function () {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
  const cards = colors.concat(colors);
  let openedCards = [];
  let matchedPairs = 0;

  cards.sort(() => Math.random() - 0.5);

  const gameBoard = document.getElementById("game-board");

  cards.forEach((color, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.color = color;
    card.dataset.index = index;
    card.addEventListener("click", handleCardClick);
    gameBoard.appendChild(card);
  });

  function handleCardClick(event) {
    const clickedCard = event.target;

    if (openedCards.length === 2 || clickedCard.classList.contains("open")) {
      return;
    }

    openCard(clickedCard);

    openedCards.push(clickedCard);

    if (openedCards.length === 2) {
      const firstCard = openedCards[0];
      const secondCard = openedCards[1];

      if (firstCard.dataset.color === secondCard.dataset.color) {
        matchedPairs++;
        if (matchedPairs === colors.length) {
          resetGame();
        }
      } else {
        setTimeout(() => {
          closeCard(firstCard);
          closeCard(secondCard);
        }, 1000);
      }

      openedCards = [];
    }
  }

  function openCard(card) {
    card.classList.add("open");
    card.style.backgroundColor = card.dataset.color;
  }

  function closeCard(card) {
    card.classList.remove("open");
    card.style.backgroundColor = "#ddd";
  }
  const startTime = new Date();
  function resetGame() {
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000;
    alert(`Szép munka elvtárs! Összepároztattad az összeset ${elapsedTime} másodperc alatt.`);
    location.reload();
  }
});