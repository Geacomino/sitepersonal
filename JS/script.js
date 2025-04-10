const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

// Deschide modalul
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactModal.style.display = "flex";
});

// Închide modalul când dai click pe "X"
closeModal.addEventListener("click", () => {
  contactModal.style.display = "none";
});

// Închide modalul dacă dai click în afara lui
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});
