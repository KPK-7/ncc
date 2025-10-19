// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Gallery Modal
function openModal(imgSrc, title, date) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = imgSrc;
  document.getElementById("modal-caption").innerHTML = `<h3>${title}</h3><p>${date}</p>`;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal on outside click
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// ========== GALLERY LOAD MORE FEATURE ==========
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".gallery-item");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  let visibleCount = 6; // initially show 6 images

  function showItems() {
    items.forEach((item, index) => {
      item.style.display = index < visibleCount ? "block" : "none";
    });

    if (visibleCount >= items.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  showItems();

  loadMoreBtn.addEventListener("click", () => {
    visibleCount += 6;
    showItems();
  });
});
