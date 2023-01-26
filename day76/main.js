document.querySelector("input").addEventListener("keyup", (e) => {
  const form = document.querySelector("form");
  if (e.target.value === "password") {
    form.classList.add("form-active");
  } else {
    form.classList.remove("form-active");
  }
});
