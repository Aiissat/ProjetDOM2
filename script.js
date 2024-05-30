let corps = document.querySelector(".container");
console.log(corps);
let appuie = document.querySelector(".toggle");
console.log(appuie);
let colors =["brown","black","yellow","orange","red","pink",];

appuie.addEventListener("click", () => {
  let colorI = parseInt(Math.random() * colors.length);
  let chosenColor = colors[colorI];
  corps.style.backgroundColor = chosenColor;
});