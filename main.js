document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    form.reset();
  });
});

function openModal() {
  document.getElementById("formModal").classList.remove("hidden");
  document.getElementById("formModal").classList.add("flex");
}

function closeModal() {
  document.getElementById("formModal").classList.remove("flex");
  document.getElementById("formModal").classList.add("hidden");
}
