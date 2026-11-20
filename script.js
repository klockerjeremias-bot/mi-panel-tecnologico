const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const themeIcon = document.querySelector(".theme-icon");

themeButton.addEventListener("click", () => {
  const isLight = document.documentElement.dataset.theme !== "light";
  document.documentElement.dataset.theme = isLight ? "light" : "dark";
  themeButton.setAttribute("aria-pressed", String(isLight));
  themeLabel.textContent = isLight ? "Modo oscuro" : "Modo claro";
  themeIcon.textContent = isLight ? "☾" : "☼";
});
