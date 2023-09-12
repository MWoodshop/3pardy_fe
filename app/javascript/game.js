document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const cardContainer = document.querySelector(".card-container");

  cards.forEach((card) => {
    const userInput = card.querySelector('.user-input');
    userInput.style.display = 'none'; // Initially hide the input box and button

    card.addEventListener("click", function () {

      // Check if there's another card already expanded
      const expandedCard = document.querySelector(".card.expanded");
      if (expandedCard && expandedCard !== card) {
        expandedCard.classList.remove("flipped", "expanded");
        expandedCard.style.top = '';
        expandedCard.style.left = '';
        expandedCard.querySelector('.user-input').style.display = 'none';
      }

      card.classList.toggle("flipped");

      if (card.classList.contains("flipped")) {
        userInput.style.display = 'block';

        // Calculate center position
        const centerX = (cardContainer.offsetWidth / 2) - (card.offsetWidth / 2);
        const centerY = (cardContainer.offsetHeight / 2) - (card.offsetHeight / 2);

        // Move the card to the center
        card.style.top = `${centerY}px`;
        card.style.left = `${centerX}px`;

        // Add 'expanded' and 'dimmed' classes
        card.classList.add("expanded");
        cardContainer.classList.add("dimmed");

      } else {
        userInput.style.display = 'none';

        // Remove 'expanded' and 'dimmed' classes
        card.classList.remove("expanded");
        cardContainer.classList.remove("dimmed");

        // Reset position
        card.style.top = '';
        card.style.left = '';
      }
    });
  });
});
