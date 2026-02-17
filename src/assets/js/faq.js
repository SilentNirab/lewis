function toggleFaq(button) {
  const faqItem = button.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");

    if (!item.classList.contains("text-gray-800"))
      item.classList.add("text-gray-800");

    if (item.classList.contains("text-white"))
      item.classList.remove("text-white");
  });

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active");
    faqItem.classList.remove("text-gray-800");
    faqItem.classList.add("text-white");
  }
}

// Add smooth scrolling animation
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-item .faq-answer").forEach((answer) => {
    answer.style.transition = "max-height 0.1s ease, padding 0.1s ease";
  });
});


