document.addEventListener("DOMContentLoaded", () => {
  // Audio
  function playAudio(audio) {
    const soundEffect = new Audio(audio);
    soundEffect.play();
  }
  const audioGameStart = "./sounds/game_start.wav";
  const audioEatGhost = "./sounds/eat_ghost.wav";
  const audioDeath = "./sounds/death.wav";
  const audioMunch = "./sounds/munch.wav";
  const audioPill = "./sounds/pill.wav";

  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  let pacDotCount = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const squares = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      } else {
        squares[i].classList.add("empty");
      }
    }
  }
  createBoard();

  //create Characters
  //draw pacman onto the board
  let pacmanCurrentIndex = 490;
  squares[pacmanCurrentIndex].classList.add("pac-man");

  // draw ghosts onto the board
  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.isScared = false;
      this.timerId = NaN;
    }
  }

  //all my ghosts
  ghosts = [
    new Ghost("blinky", 348, 250),
    new Ghost("pinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 500),
  ];

  //draw my ghosts onto the grid
  ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add("ghost");
  });

  // Start game
  function loadGame() {
    document.getElementById("start-button").style.display = "none";

    //get the coordinates of pacman on the grid with X and Y axis
    function getCoordinates(index) {
      return [index % width, Math.floor(index / width)];
    }

    console.log(getCoordinates(pacmanCurrentIndex));

    //move pacman
    function movePacman(e) {
      squares[pacmanCurrentIndex].classList.remove("pac-man");
      switch (e.keyCode) {
        // go left
        case 37:
          if (
            pacmanCurrentIndex % width !== 0 &&
            !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
            !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
          )
            pacmanCurrentIndex -= 1;
          if (squares[pacmanCurrentIndex - 1] === squares[363]) {
            pacmanCurrentIndex = 391;
          }
          break;
        // go up
        case 38:
          if (
            pacmanCurrentIndex - width >= 0 &&
            !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
            !squares[pacmanCurrentIndex - width].classList.contains(
              "ghost-lair"
            )
          )
            pacmanCurrentIndex -= width;
          break;
        // go right
        case 39:
          if (
            pacmanCurrentIndex % width < width - 1 &&
            !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
            !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
          )
            pacmanCurrentIndex += 1;
          if (squares[pacmanCurrentIndex + 1] === squares[392]) {
            pacmanCurrentIndex = 364;
          }
          break;
        // go down
        case 40:
          if (
            pacmanCurrentIndex + width < width * width &&
            !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
            !squares[pacmanCurrentIndex + width].classList.contains(
              "ghost-lair"
            )
          )
            pacmanCurrentIndex += width;
          break;
      }
      squares[pacmanCurrentIndex].classList.add("pac-man");
      pacDotEaten();
      powerPelletEaten();
      checkForGameOver();
      checkForWin();
    }
    document.addEventListener("keyup", movePacman);

    // what happens when you eat a pac-dot
    function pacDotEaten() {
      if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
        playAudio(audioMunch);
        score += 10;
        pacDotCount++;
        scoreDisplay.innerHTML = score;
        squares[pacmanCurrentIndex].classList.remove("pac-dot");
      }
    }

    //what happens when you eat a power-pellet
    function powerPelletEaten() {
      if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
        playAudio(audioPill);
        score += 50;
        scoreDisplay.innerHTML = score;
        ghosts.forEach((ghost) => (ghost.isScared = true));
        setTimeout(unScareGhosts, 10000);
        squares[pacmanCurrentIndex].classList.remove("power-pellet");
      }
    }

    //make the ghosts stop flashing
    function unScareGhosts() {
      ghosts.forEach((ghost) => (ghost.isScared = false));
    }

    //move the Ghosts
    // ghosts.forEach((ghost) => moveGhost(ghost));
    moveGhostSmart(ghosts[0]); // move blinky
    moveGhostSmart(ghosts[1]); // move pinky
    moveGhostBasic(ghosts[2]); // move inky
    moveGhostBasic(ghosts[3]); // move clyde

    // Ghosts move randomly
    function moveGhostBasic(ghost) {
      const directions = [-1, +1, width, -width];
      let direction = directions[Math.floor(Math.random() * directions.length)];

      ghost.timerId = setInterval(function () {
        //if the next square your ghost is going to go to does not have a ghost and does not have a wall
        if (
          !squares[ghost.currentIndex + direction].classList.contains(
            "ghost"
          ) &&
          !squares[ghost.currentIndex + direction].classList.contains("wall")
        ) {
          //remove the ghosts classes
          squares[ghost.currentIndex].classList.remove(ghost.className);
          squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
          //move into that space
          ghost.currentIndex += direction;
          squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
          //else find a new random direction to go in
        } else direction = directions[Math.floor(Math.random() * directions.length)];

        //if the ghost is currently scared
        if (ghost.isScared) {
          squares[ghost.currentIndex].classList.add("scared-ghost");
        }

        //if the ghost is currently scared and pacman is on it
        if (
          ghost.isScared &&
          squares[ghost.currentIndex].classList.contains("pac-man")
        ) {
          playAudio(audioEatGhost);
          squares[ghost.currentIndex].classList.remove(
            ghost.className,
            "ghost",
            "scared-ghost"
          );
          ghost.currentIndex = ghost.startIndex;
          score += 200;
          scoreDisplay.innerHTML = score;
          squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
        }
        checkForGameOver();
      }, ghost.speed);
    }

    // Ghosts move towards pac-man
    function moveGhostSmart(ghost) {
      const directions = [-1, +1, width, -width];
      let direction = directions[Math.floor(Math.random() * directions.length)];

      ghost.timerId = setInterval(function () {
        //if ghost is not in the ghost-lair and not in the empty-area
        if (
          !(
            squares[ghost.currentIndex].classList.contains("ghost-lair") ||
            squares[ghost.currentIndex].classList.contains("empty")
          )
        ) {
          if (
            //if the next square your ghost is going to go to does not have a ghost and does not have a wall
            !squares[ghost.currentIndex + direction].classList.contains(
              "ghost"
            ) &&
            !squares[ghost.currentIndex + direction].classList.contains("wall")
          ) {
            //remove the ghosts classes
            squares[ghost.currentIndex].classList.remove(ghost.className);
            squares[ghost.currentIndex].classList.remove(
              "ghost",
              "scared-ghost"
            );

            //move into that space
            const [ghostX, ghostY] = getCoordinates(ghost.currentIndex);
            const [pacManX, pacManY] = getCoordinates(pacmanCurrentIndex);
            const [ghostNextX, ghostNextY] = getCoordinates(
              ghost.currentIndex + direction
            );

            function isXCoordCloser() {
              if (Math.abs(ghostNextX - pacManX) < Math.abs(ghostX - pacManX)) {
                return true;
              } else return false;
            }

            function isYCoordCloser() {
              if (Math.abs(ghostNextY - pacManY) < Math.abs(ghostY - pacManY)) {
                return true;
              } else return false;
            }

            if (isXCoordCloser() || isYCoordCloser()) {
              ghost.currentIndex += direction;
              squares[ghost.currentIndex].classList.add(
                ghost.className,
                "ghost"
              );
            } else {
              squares[ghost.currentIndex].classList.add(
                ghost.className,
                "ghost"
              );
              direction =
                directions[Math.floor(Math.random() * directions.length)];
            }
            //else find a new random direction to go in
          } else {
            direction =
              directions[Math.floor(Math.random() * directions.length)];
          }
        } else if (
          //if ghost is in the ghost-lair or the empty-area
          !squares[ghost.currentIndex + direction].classList.contains(
            "ghost"
          ) &&
          !squares[ghost.currentIndex + direction].classList.contains("wall")
        ) {
          //remove the ghosts classes
          squares[ghost.currentIndex].classList.remove(ghost.className);
          squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
          //move into that space
          ghost.currentIndex += direction;
          squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
          //else find a new random direction to go in
        } else
          direction = directions[Math.floor(Math.random() * directions.length)];

        //if the ghost is currently scared
        if (ghost.isScared) {
          squares[ghost.currentIndex].classList.add("scared-ghost");
        }

        //if the ghost is currently scared and pacman is on it
        if (
          ghost.isScared &&
          squares[ghost.currentIndex].classList.contains("pac-man")
        ) {
          squares[ghost.currentIndex].classList.remove(
            ghost.className,
            "ghost",
            "scared-ghost"
          );
          ghost.currentIndex = ghost.startIndex;
          score += 200;
          scoreDisplay.innerHTML = score;
          squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
        }
        checkForGameOver();
      }, ghost.speed);
    }

    //check for a game over
    function checkForGameOver() {
      if (
        squares[pacmanCurrentIndex].classList.contains("ghost") &&
        !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
      ) {
        playAudio(audioDeath);
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        setTimeout(function () {
          alert("Game Over");
        }, 500);
      }
    }

    // Count the number of pac-dots
    let totalPacDots = 0;
    for (let i = 0; i < layout.length; i++) {
      if (layout[i] === 0) {
        totalPacDots++;
      }
    }

    //check for a win - when all pac-dots are eaten
    function checkForWin() {
      if (pacDotCount === totalPacDots) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        setTimeout(function () {
          alert("You have WON!");
        }, 500);
      }
    }
  }

  function startGame() {
    playAudio(audioGameStart);
    setTimeout(loadGame, 4000);
  }
  document.getElementById("start-button").addEventListener("click", startGame);
});
