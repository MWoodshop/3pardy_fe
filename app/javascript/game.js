document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const userInput = card.querySelector('.user-input');
      userInput.style.display = 'none'; // Initially hide the input box and button

      card.addEventListener("click", function () {
        card.classList.toggle("flipped");
        if (card.classList.contains("flipped")) {
          userInput.style.display = 'block'; // Show the input box and button when card is flipped
        } else {
          userInput.style.display = 'none'; // Hide the input box and button when card is unflipped
        }
      });
    });
  });
