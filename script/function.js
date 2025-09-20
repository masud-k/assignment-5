

const buyBtn = document.getElementById("buy-ticket");
buyBtn.addEventListener("click", function () {
    document.querySelector(".seat-plan").scrollIntoView({
        behavior: "smooth"
    });
});

const ticketSelection = document.querySelectorAll(".seat.bg-slate-300");
const seatDetails = document.querySelector(".bg-white.p-6"); // Seat details div
const selectedSeats = [];

for (let i=0; i<ticketSelection.length; i++) {
    ticketSelection[i].addEventListener("click", function () {
        const seatNumber = this.innerText;
        if (this.classList.contains("bg-slate-300")) {
            this.classList.remove("bg-slate-300");
            this.classList.add("bg-green-400");
        }
    })
};
