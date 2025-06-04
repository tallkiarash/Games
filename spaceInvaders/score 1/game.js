const sides = ["head", "tail"];
let gamesPlayed = 0;
let gamesWon = 0;

function saveHighscore() {
  const nameElement = document.getElementById("name");
  let highscore = {
    name: nameElement.value,
    score: Math.round((gamesWon / gamesPlayed) * 100),
  };

  if (localStorage.highscore === undefined) {
    localStorage.highscore = JSON.stringify([]);
  }
  let highscoreArray = JSON.parse(localStorage.highscore);
  highscoreArray.push(highscore);
  localStorage.highscore = JSON.stringify(highscoreArray);

  displayHighscore();
}

function displayHighscore() {
  if (localStorage.highscore !== undefined) {
    let highscoreArray = JSON.parse(localStorage.highscore);
    highscoreArray.sort(function (a, b) {
      return b.score - a.score;
    });

    const highscoreElement = document.getElementById("highscore");
    highscoreElement.innerText = "";
    for (let score of highscoreArray) {
      const item = document.createElement("li");
      item.innerText = score.name + ":    " + score.score;
      highscoreElement.appendChild(item);
    }
  }
}

function loadHandler() {
  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", function () {
    saveHighscore();
  });
  displayHighscore();
}
window.addEventListener("load", loadHandler);