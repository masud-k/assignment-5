// if clicked buy tickert button then go to seat plan and number area.

function goToSeatPlan() {
    const buyTicketBtn = document.getElementById("buy-ticket");
    buyTicketBtn.addEventListener("click", function() {
        window.location.href = "#seat-plan-and-number";
    });
}