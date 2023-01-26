const menu = document.querySelector(".menu");
const lines = [...document.querySelectorAll(".lines")];

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.length === 2) {
    lines.forEach((line, index) => {
      line.classList.add(`line-active-${index + 1}-rev`);
      line.classList.remove(`line-active-${index + 1}`);
    });
  } else {
    lines.forEach((line, index) => {
      line.classList.add(`line-active-${index + 1}`);
      line.classList.remove(`line-active-${index + 1}-rev`);
    });
  }
});
