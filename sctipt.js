let userOptions = document.querySelectorAll(".user-options");
let userOptionsRound = document.querySelectorAll(".user-options-round");
let userScoreHolder = document.querySelector('.user-points');
let cpuScoreHolder = document.querySelector('.cpu-points');
let stopGame = document.querySelector('.disable-game');
let userRoundPoint = document.querySelector("#round-user-point");
let cpuRoundPoint = document.querySelector("#round-cpu-point");
let resetBtn = document.querySelector(".reset");
let winnerName = document.querySelector("#winner-name");
let cpuOptions = document.querySelectorAll('.cpu-options');
let round = document.querySelector('.round');
let userScore = 0;
let cpuScore = 0;
let isEnd = false;
let user;
for (let i = 0; i < userOptions.length; i++) {
    userOptions[i].addEventListener('click', (e) => {
        user = i;
        let cpu = cpuChoose();
        switch (user) {
            case 0:
                if (cpu == 1) {
                    roundPoint("cpu");
                } else if (cpu == 2) {
                    roundPoint("user");
                } else {
                    roundPoint("equal");
                }
                break;
            case 1:
                if (cpu == 0) {
                    roundPoint("user");
                } else if (cpu == 2) {
                    roundPoint("cpu");
                }
                else {
                    roundPoint("equal");
                }
                break;
            case 2:
                if (cpu == 0) {
                    roundPoint("cpu");
                } else if (cpu == 1) {
                    roundPoint("user");
                }
                else {
                    roundPoint("equal");
                }
                break;
            default:
                break;
        }
        stopGame.style.display = "block";
    });
}

function roundPoint(who) {
    if (who == "user") {
        userScore++;
        userRoundPoint.textContent = 1;
        cpuRoundPoint.textContent = 0;
    } else if (who == "cpu") {
        cpuScore++;
        userRoundPoint.textContent = 0;
        cpuRoundPoint.textContent = 1;
    } else {
        userRoundPoint.textContent = 0;
        cpuRoundPoint.textContent = 0;
    }
    userScoreHolder.textContent = userScore;
    cpuScoreHolder.textContent = cpuScore;
    if (userScore == 3 || cpuScore == 3) {
        isEnd = true;
        userRoundPoint.textContent = userScore;
        cpuRoundPoint.textContent = cpuScore;
        if (userScore > cpuScore) {
            endGame("user");
        } else {
            endGame("cpu");
        }
    }
}

document.addEventListener('keydown', (e) => {
    if (!isEnd) {
        if (e.key == "r" || e.key == "R") {
            reloadRound();
            stopGame.style.display = "none";
        }
    }
});


function cpuChoose() {
    let cpu = Math.floor((Math.random() * 10) / 4);
    for (let i = 0; i < cpuOptions.length; i++) {
        if (i == cpu) {
            cpuOptions[i].classList.remove("hidden");
        }

    }
    for (let i = 0; i < userOptionsRound.length; i++) {
        if (i == user) {
            userOptionsRound[i].classList.remove("hidden");
        }

    }
    return cpu;
}

function endGame(winner) {
    message = document.querySelector("#message");
    stopGame.style.display = "block";
    resetBtn.style.display = "block";
    reloadRound();
    if (winner == "user") {
        message.textContent = "You Win!";
        message.style.fontSize = "larger";
        round.style.backgroundColor = "#00ff6225";
    } else {
        message.textContent = "CPU Win!";
        message.style.fontSize = "larger";
        round.style.backgroundColor = "#fa5e5e25";
    }

    resetBtn.addEventListener('click', () => {
        window.location.reload();
    });
}


function reloadRound() {
    for (let i = 0; i < cpuOptions.length; i++) {
        cpuOptions[i].classList.add("hidden");
        userOptionsRound[i].classList.add("hidden");
    }
}
