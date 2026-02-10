const container1 = document.querySelector(".main-container");

const popup1 = document.querySelector(".search_popup");

const close_pup1 = document.querySelector(".close_search_popup");

const btn1 = document.querySelector(".search_btn");

btn1.addEventListener("click", () => {
  popup1.classList.add("search_active");
  container1.classList.add("search_active");
});

close_pup1.addEventListener("click", () => {
  popup1.classList.remove("search_active");
  container1.classList.remove("search_active");
});
