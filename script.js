function next() {
  window.location.href = "yes.html";
}

function move() {
  const changeGif = document.getElementById("main-photo");
  changeGif.src = "gifs/cats-sad.gif";
  var x =
    Math.random() *
    (window.innerHeight - document.getElementById("noButton").offsetHeight);
  var y =
    Math.random() *
    (window.innerWidth - document.getElementById("noButton").offsetWidth);
  document.getElementById("noButton").style.top = `${x}px`;
  document.getElementById("noButton").style.left = `${y}px`;
}
