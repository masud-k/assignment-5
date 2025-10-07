document.addEventListener("DOMContentLoaded", function () {
  const buyBtn = document.getElementById("buy-ticket");
  const seatDetails = document.querySelector(".bg-white.p-6"); // Seat details div
  const totalFareElement = seatDetails.querySelector("h2:nth-of-type(1) + h2");
  const grandTotalElement = seatDetails.querySelector(
    ".flex.justify-between.mt-6 p:last-child"
  );
  const couponInput = seatDetails.querySelector("input[type='text']");
  const applyBtn = seatDetails.querySelector("button");

  let selectedSeats = [];
  let seatPrice = 500; // প্রতিটি সিটের দাম
  let discount = 0;

  // ✅ Buy Ticket এ ক্লিক করলে সিট সেকশনে স্ক্রল করবে
  buyBtn.addEventListener("click", function () {
    document.querySelector("section:nth-of-type(3)").scrollIntoView({
      behavior: "smooth",
    });
  });

  // ✅ সব সিট ধরতে হবে
  const seats = document.querySelectorAll(".seat.bg-slate-300");

  seats.forEach((seat) => {
    seat.addEventListener("click", function () {
      const seatNumber = this.innerText.trim();
      console.log(seatNumber);

      // যদি সিট আগে সিলেক্ট করা থাকে → আবার ক্লিক করলে Unselect হবে
      if (selectedSeats.includes(seatNumber)) {
        selectedSeats = selectedSeats.filter((s) => s !== seatNumber);
        this.classList.remove("bg-green-400");
        this.classList.add("bg-slate-300");

        // ✅ Seat Details থেকে রিমুভ করো
        const rows = seatDetails.querySelectorAll(
          ".flex.justify-between.mx-2.mt-2"
        );
        rows.forEach((row) => {
          if (row.querySelector("p").innerText === seatNumber) {
            row.remove();
          }
        });
      } else {
        // ✅ নতুন সিট সিলেক্ট
        selectedSeats.push(seatNumber);
        this.classList.remove("bg-slate-300");
        this.classList.add("bg-green-400");

        // Seat Details এ নতুন লাইন যোগ
        const newRow = document.createElement("div");
        newRow.className = "flex justify-between mx-2 mt-2";
        newRow.innerHTML = `<p>${seatNumber}</p><p>AC Business</p><p>${seatPrice} Taka</p>`;
        seatDetails.insertBefore(
          newRow,
          seatDetails.querySelector("hr.divider-dashed.mt-4")
        );
      }

      // ✅ Total Fare & Grand Total আপডেট
      updateFare();
    });
  });

  // ✅ Coupon Apply
  applyBtn.addEventListener("click", function () {
    let code = couponInput.value.trim();
    let totalFare = selectedSeats.length * seatPrice;
    discount = 0;

    if (code === "NEW15") {
      discount = totalFare * 0.15;
    } else if (code.toLowerCase() === "couple20") {
      discount = totalFare * 0.2;
    } else {
      alert("Invalid Coupon Code!");
      return;
    }

    updateFare();
    alert("Coupon Applied!");
  });

  // ✅ Function: Total Fare Update
  function updateFare() {
    let totalFare = selectedSeats.length * seatPrice;
    totalFareElement.innerText = totalFare + " Taka";
    grandTotalElement.innerText = totalFare - discount + " Taka";
  }
});
