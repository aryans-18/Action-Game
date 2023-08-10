score = 0;
cross = true;

audio = new Audio('music.wav');
audiogo = new Audio('endgame.wav');

setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {

    if (e.keyCode == 38) {
        men = document.querySelector('.men');
        men.classList.add('animatemen');
        setTimeout(() => {
            men.classList.remove('animatemen')
        }, 800);
    }

    if (e.keyCode == 39) {
        men = document.querySelector('.men');
        menx = parseInt(window.getComputedStyle(men, null).getPropertyValue('left'));
        men.style.left = menX + 112 + "px";
    }

    if (e.keyCode == 37) {
        men = document.querySelector('.men');
        menx = parseInt(window.getComputedStyle(men, null).getPropertyValue('left'));
        men.style.left = (menX - 112) + "px";
    }

}

setInterval(() => {
    men = document.querySelector('.men');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(men, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(men, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to play Again";
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000)
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;

        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {

            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation.duration'));
            newDur = aniDur - 0.1;
            obsatcle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}