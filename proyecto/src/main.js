const gameArea = document.getElementById("gameArea");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

let score = 0;
let time = 30;
let gameInterval;
let circleInterval;

startBtn.addEventListener("click", startGame);

function startGame() {
  score = 0;
  time = 30;
  scoreEl.textContent = score;
  timeEl.textContent = time;
  gameArea.innerHTML = "";

  startBtn.disabled = true;

  gameInterval = setInterval(updateTime, 1000);
  circleInterval = setInterval(createCircle, 700);
}

function updateTime() {
  time--;
  timeEl.textContent = time;

  if (time <= 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(circleInterval);
  startBtn.disabled = false;

  alert(`⏳ ¡Juego terminado! Tu puntaje fue: ${score}`);
}

function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const x = Math.random() * (gameArea.clientWidth - 40);
  const y = Math.random() * (gameArea.clientHeight - 40);

  circle.style.left = x + "px";
  circle.style.top = y + "px";

  circle.onclick = () => {
    score++;
    scoreEl.textContent = score;
    circle.remove();
  };

  gameArea.appendChild(circle);

  setTimeout(() => {
    if (circle.parentElement) {
      circle.remove();
    }
  }, 1000);
}
