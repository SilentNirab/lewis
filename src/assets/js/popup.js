const container = document.querySelector(".main-container");

const popup = document.querySelector(".popup");

const close_pup = document.querySelector(".close-pup");

const btn = document.querySelector(".notification-btn");
const btn_mb = document.querySelector(".notification-btn-sm");

btn.addEventListener("click", () => {
  popup.classList.add("active");
  container.classList.add("active");
});
btn_mb.addEventListener("click", () => {
  popup.classList.add("active");
  container.classList.add("active");
});

close_pup.addEventListener("click", () => {
  popup.classList.remove("active");
  container.classList.remove("active");
});

