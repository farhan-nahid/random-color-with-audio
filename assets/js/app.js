// upadte board color & click number

const board = document.getElementById("board__container");

let count = 0;
board.addEventListener("click", (e) => {
  count++;
  e.target.innerHTML = count;
  const randomColor = Math.floor(Math.random() * 10);

  if (randomColor === 0) {
    e.target.style.background = "rgba(255, 0, 0, 0.700)";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 1) {
    e.target.style.background = "rgba(0, 128, 0, 0.700)";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 2) {
    e.target.style.background = "rgba(0, 0, 255, 0.7)";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 3) {
    e.target.style.background = "springgreen";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 4) {
    e.target.style.background = "sienna";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 5) {
    e.target.style.background = "teal";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 6) {
    e.target.style.background = "slateblue";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 7) {
    e.target.style.background = "thistle";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 8) {
    e.target.style.background = "violet";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
  if (randomColor === 9) {
    e.target.style.background = "tomato";
    e.target.style.color = "#fff";
    e.target.style.textShadow = "2px 3px 10px #000";
    e.target.style.fontSize = "4em";
    e.target.style.fontWeight = "900";
  }
});

// add event listener and play music

document.getElementById("box__one").addEventListener("click", () => {
  document.getElementById("audio__one").play();
});

document.getElementById("box__two").addEventListener("click", () => {
  document.getElementById("audio__two").play();
});

document.getElementById("box__three").addEventListener("click", () => {
  document.getElementById("audio__one").play();
});

document.getElementById("box__four").addEventListener("click", () => {
  document.getElementById("audio__four").play();
});

document.getElementById("box__five").addEventListener("click", () => {
  document.getElementById("audio__five").play();
});

document.getElementById("box__six").addEventListener("click", () => {
  document.getElementById("audio__six").play();
});

document.getElementById("box__seven").addEventListener("click", () => {
  document.getElementById("audio__seven").play();
});

document.getElementById("box__eight").addEventListener("click", () => {
  document.getElementById("audio__eight").play();
});

document.getElementById("box__nine").addEventListener("click", () => {
  document.getElementById("audio__nine").play();
});
