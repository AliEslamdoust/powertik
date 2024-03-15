let allDarkModes = document.querySelectorAll("[class*='dark:']");
let darkModeBtn = document.getElementById("darkModeBtn");
let darkMode = false;
darkModeBtn.addEventListener("click", activateDarkMode);
function activateDarkMode() {
  darkMode = darkMode ? false : true;
  allDarkModes.forEach((elem) => {
    darkMode
      ? (elem.className = elem.className.replaceAll("dark:", "pt-dark-"))
      : (elem.className = elem.className.replaceAll("pt-dark-", "dark:"));
  });
}

darkModeBtn.addEventListener("click", function () {
  this.innerHTML = this.innerHTML == "dark mode" ? "light mode" : "dark mode";
});

let copyCodeBtn = document.querySelectorAll(".copyCode");
let copyCodeTxt = document.querySelectorAll(".codeCopied");
let codeContainer = document.querySelectorAll(".mainCode");

copyCodeBtn.forEach((element, index) => {
  element.addEventListener("click", function () {
    let copyText = codeContainer[index].innerHTML;

    navigator.clipboard.writeText(copyText);

    copyCodeTxt[index].innerHTML = "copied!";

    this.addEventListener("mouseout", () => {
      copyCodeTxt[index].innerHTML = "copy";
    });
  });
});

let menu = document.getElementById("headerMenu");
let menuWidth = menu.getBoundingClientRect().width;
let div = document.createElement("div");
div.className = "customDiv";
div.style.width = menuWidth + "px";
document.body.appendChild(div);
