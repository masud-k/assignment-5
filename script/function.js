const buyBtn = document.getElementById("buy-ticket");
buyBtn.addEventListener("click", function () {
  document.querySelector(".seat-plan").scrollIntoView({
    behavior: "smooth",
  });
});

const ticketSelection = document.querySelectorAll(".seat.bg-slate-300");
const seatDetails = document.querySelector(".bg-white.p-6"); // Seat details div
const selectedSeats = [];
const fare = 500;
const totalFareElement = document.getElementById("total-fare");
const grandTotalElement = seatDetails.querySelector(
  ".flex.justify-between.mt-6 p:last-child"
);

for (let i = 0; i < ticketSelection.length; i++) {
  const seat = ticketSelection[i];
  seat.addEventListener("click", function () {
    const seatNumber = seat.innerText.trim();
    if (selectedSeats.includes(seatNumber)) {
      // Unselect seat
      selectedSeats.splice(selectedSeats.indexOf(seatNumber), 1);
      seat.classList.remove("bg-green-400");
      seat.classList.add("bg-slate-300");

      // Remove from seat details
      const rows = seatDetails.querySelectorAll(
        ".flex.justify-between.mx-2.mt-2"
      );
      for (const row of rows) {
        if (row.querySelector("p").innerText === seatNumber) {
          row.remove();
        }
      }
      updateFare();
    } else {
      // Select seat
      selectedSeats.push(seatNumber);
      this.classList.remove("bg-slate-300");
      this.classList.add("bg-green-400");

      // Add to seat details
      const newRow = document.createElement("div");
      newRow.className = "flex justify-between mx-2 mt-2";
      newRow.innerHTML = `<p>${seatNumber}</p><p>AC Business</p><p>500 Taka</p>`;
      seatDetails.insertBefore(
        newRow,
        seatDetails.querySelector("hr.divider-dashed.mt-4")
      );
      updateFare();
    }
    function updateFare() {
    const totalFare = selectedSeats.length * fare;
    if (totalFareElement) {
      totalFareElement.innerText = `${totalFare} Taka`;
    }
    if (grandTotalElement) {
      grandTotalElement.innerText = `${totalFare} Taka`;
    }
  }
  });

  
}
