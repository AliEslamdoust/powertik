let howBtn = document.querySelectorAll(".howBtn");
let howLink = document.querySelectorAll(".howLink");
howBtn.forEach((elem, i) => {
  elem.addEventListener("click", function () {
    window.scroll({
      top: howLink[i].getBoundingClientRect().top + window.pageYOffset - 64,
      left: 0,
      behavior: "smooth",
    });
  });
});
