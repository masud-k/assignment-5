const buyBtn = document.getElementById("buy-ticket");
buyBtn.addEventListener("click", function () {
  document.querySelector(".seat-plan").scrollIntoView({
    behavior: "smooth",
  });
});

const ticketSelection = document.querySelectorAll(".seat.bg-slate-300");
const seatDetails = document.querySelector(".bg-white.p-6");
const selectedSeats = [];
const fare = 500;
const totalFareElement = document.getElementById("total-fare");
const grandTotalElement = seatDetails.querySelector(
  ".flex.justify-between.mt-6 p:last-child"
);
const couponInput = seatDetails.querySelector("input[type='text']");
const applyBtn = seatDetails.querySelector("button");

for (let i = 0; i < ticketSelection.length; i++) {
  const seat = ticketSelection[i];
  seat.addEventListener("click", function () {
    const seatNumber = seat.innerText.trim();
    if (selectedSeats.includes(seatNumber)) {
      selectedSeats.splice(selectedSeats.indexOf(seatNumber), 1);
      seat.classList.remove("bg-green-400");
      seat.classList.add("bg-slate-300");

      const rows = seatDetails.querySelectorAll(
        ".flex.justify-between.mx-2.mt-2"
      );
      for (const row of rows) {
        if (row.querySelector("p").innerText === seatNumber) {
          row.remove();
        }
      }
    } else {
      // Select seat
      selectedSeats.push(seatNumber);
      this.classList.remove("bg-slate-300");
      this.classList.add("bg-green-400");


      const newRow = document.createElement("div");
      newRow.className = "flex justify-between mx-2 mt-2";
      newRow.innerHTML = `<p>${seatNumber}</p><p>AC Business</p><p>500 Taka</p>`;
      seatDetails.insertBefore(
        newRow,
        seatDetails.querySelector("hr.divider-dashed.mt-4")
      );
    }
    updateFare();
  });
}

applyBtn.addEventListener("click", function () {
  const couponCode = couponInput.value.trim()
  const totalFare = selectedSeats.length * fare;
  discount = 0;
  if (couponCode === "NEW15") {
    discount = totalFare * 0.15;
  }else if (couponCode === "COUPLE20") {
    discount = totalFare * 0.20;
  }else {
    alert("Invalid Coupon Code");
    return;
  }
  updateFare();
});
function updateFare() {
  const totalFare = selectedSeats.length * fare;
  totalFareElement.innerText = `${totalFare} Taka`;
  grandTotalElement.innerText = `${totalFare - discount} Taka`;
}