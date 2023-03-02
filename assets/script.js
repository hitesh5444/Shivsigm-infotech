// for live this page to show massege

let docTitle = document.title;

window.addEventListener("blur", () => {
  document.title = "Come Back ;(";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

// for loader

var loader = document.getElementById("pre-loader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

// for dropdown

function dropdown() {
  document.getElementById("drop").classList.toggle("show");
}

// for popup

function popup() {
  document.getElementById("pop").classList.toggle("show");
}


// for sticky navbar

window.addEventListener("scroll", function () {
  var navbar = document.querySelector("navbar");
  navbar.classList.toggle("sticky", (window.scrollY = 0));
});
