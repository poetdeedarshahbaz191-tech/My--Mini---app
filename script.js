// Learn with Deedar Quambrani
// Online English Tuition

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});

const trialButton = document.querySelector(".btn");

if (trialButton) {
    trialButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Thank you for your interest! Booking will be available soon.");
    });
}
