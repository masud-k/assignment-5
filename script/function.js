

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
        if (selectedSeats.includes(seatNumber)) {
            // Unselect seat
            selectedSeats.splice(selectedSeats.indexOf(seatNumber), 1);
            this.classList.remove("bg-green-400");
            this.classList.add("bg-slate-300");

            // Remove from seat details
            const rows = seatDetails.querySelectorAll(".flex.justify-between.mx-2.mt-2");
            rows.forEach(row => {
                if (row.querySelector("p").innerText === seatNumber) {
                    row.remove();
                }
            });
        }
        else {
            // Select seat
            selectedSeats.push(seatNumber);
            this.classList.remove("bg-slate-300");
            this.classList.add("bg-green-400");

            // Add to seat details
            const newRow = document.createElement("div");
            newRow.className = "flex justify-between mx-2 mt-2";
            newRow.innerHTML = `<p>${seatNumber}</p><p>AC Business</p><p>500 Taka</p>`;
            seatDetails.insertBefore(newRow, seatDetails.querySelector("hr.divider-dashed.mt-4"));
        }
    })
};
