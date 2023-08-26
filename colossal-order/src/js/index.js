var csIIimage = document.querySelector("#csII-image");
var csIIdescript = document.querySelector("#csII-description");
var containGame = document.querySelector(".contain-game");

function showcsIIdescript() {
  containGame.style.width = "max-width";
  csIIdescript.style.display = "initial";
  csIIdescript.addEventListener("animationend", function() {
    csIIdescript.style.left = "290px";
  });
  containGame.style.animation = "contain-game-right 1s";
  containGame.addEventListener("animationend", function() {
    containGame.style.left = "290px";
  });
}

function hidecsIIdescript() {
  if (keepcsIIdescript()) {

  } else {
    csIIdescript.style.animation = "slide-left 1s";
    csIIdescript.addEventListener("animationend", function() {
      csIIdescript.style.display = "none";
      csIIdescript.style.left = "290px";
      location.reload();
    });
    containGame.style.animation = "contain-game-left 1s";
    containGame.addEventListener("animationend", function() {
      containGame.style.left = "290px";
    });

  }
}

function keepcsIIdescript() {
  csIIdescript.style.display = "initial";
  csIIdescript.style.left = "290px";
}

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
console.log(Intl.DateTimeFormat().resolvedOptions());
var offset = new Date().getTimezoneOffset();
console.log(offset);
if (offset > -600) {
  console.log("bro")
}