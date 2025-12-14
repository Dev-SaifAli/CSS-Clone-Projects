const showMenuBtn = document.getElementById("showMenuBtn");
const navMenu = document.getElementById("navMenu");

showMenuBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("menu-open");
  showMenuBtn.innerHTML = isOpen
    ? `<i class="fa-solid fa-xmark"></i>`
    : `<i class="fa-solid fa-bars"></i>`;
});
