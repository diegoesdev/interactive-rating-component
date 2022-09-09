const cardContainer = document.querySelector(".card");
const thanksContainer = document.querySelector(".thank-you");
const buttonSubmit = document.getElementById("submit");
const rating = document.getElementById("rating");
const buttonRates = document.querySelectorAll(".card__rate--active")
const buttons = document.querySelectorAll('button');

buttonSubmit.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden");
    cardContainer.style.display = "none";
});

buttonRates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    });
});

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})