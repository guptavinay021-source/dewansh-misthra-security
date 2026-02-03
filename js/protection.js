document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
    e.preventDefault();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
    return false;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
  }
});

