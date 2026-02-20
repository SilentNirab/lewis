// Mobile menu functionality
let menuToggle, menuOverlay, closeBtn, mainContent;
let isMenuInitialized = false;

// Check if we're on small screens (less than 1024px - matches lg breakpoint)
function isSmallScreen() {
  return window.innerWidth < 1024;
}

// Initialize menu functionality
function initializeMenu() {
  if (isMenuInitialized) return;

  menuToggle = document.getElementById("menuToggle");
  menuOverlay = document.getElementById("menuOverlay");
  closeBtn = document.getElementById("closeBtn");
  mainContent = document.getElementById("mainContent");

  console.log("Menu.js initializing");
  console.log("menuToggle:", menuToggle);
  console.log("menuOverlay:", menuOverlay);
  console.log("closeBtn:", closeBtn);

  if (!menuToggle || !menuOverlay || !closeBtn) {
    console.log("Menu elements not found");
    return;
  }

  // Open menu
  function openMenu() {
    console.log("Opening menu");
    menuOverlay.classList.remove("sidebar-hidden");
    menuOverlay.classList.add("sidebar-visible");
    document.body.style.overflow = "hidden";
  }

  // Close menu
  function closeMenu() {
    console.log("Closing menu");
    menuOverlay.classList.remove("sidebar-visible");
    menuOverlay.classList.add("sidebar-hidden");
    document.body.style.overflow = "auto";
  }

  // Menu toggle event
  menuToggle.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Menu toggle clicked");
    openMenu();
  });

  // Close button event
  closeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Close button clicked");
    closeMenu();
  });

  // Close menu when clicking on overlay background
  menuOverlay.addEventListener("click", function (e) {
    if (e.target === menuOverlay) {
      console.log("Overlay clicked");
      closeMenu();
    }
  });

  // Keyboard support
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  isMenuInitialized = true;
  console.log("Menu initialized successfully");
}

// Check if we should initialize menu based on screen size
function checkAndInitializeMenu() {
  if (isSmallScreen()) {
    console.log("Small screen detected (< 1024px), initializing menu");
    initializeMenu();
  } else {
    console.log("Large screen detected (>= 1024px), menu not needed");
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded, checking screen size");
  checkAndInitializeMenu();
});

// Also check on window resize
window.addEventListener("resize", function() {
  console.log("Window resized, checking screen size");
  checkAndInitializeMenu();
});

// Initialize profile avatar with fallback
document.addEventListener("DOMContentLoaded", function () {
  const profileImg = document.querySelector("header img");
  if (profileImg) {
    profileImg.onerror = function () {
      this.style.display = "none";
      this.parentElement.innerHTML =
        '<div class="w-full h-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white! font-bold text-lg">JD</div>';
    };
  }
});
