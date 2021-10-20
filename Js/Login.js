const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");


inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
      inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
      if (inp.value != "") return;
      inp.classList.remove("active");
    });
  });
  
  toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      main.classList.toggle("sign-up-mode");
      console.log("hi")
    });
  });