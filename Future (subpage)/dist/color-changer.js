const changer = document.querySelector("div.color-changer input")
const bodyTag = document.querySelector("body")

changer.addEventListener("input", function () {
  bodyTag.style.backgroundColor = changer.value
  
  const color = chroma(changer.value)
  
  if (color.luminance() < 0.3) {
    bodyTag.classList.add("dark")
  } else {
    bodyTag.classList.remove("dark")
  }
  
})







var buttonIncrease = document.getElementById('button-increase'),
    buttonDecrease = document.getElementById('button-decrease');


// Decrease Button
buttonDecrease.addEventListener('click', function() {
  resizeText(-1);
});

// Increase Button
buttonIncrease.addEventListener('click', function() {
  resizeText(1);
});


//http://davidwalsh.name/change-text-size-onclick-with-javascript
function resizeText(multiplier) {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }

  document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
}
