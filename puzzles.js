document.addEventListener('click', (event) => {
    const target = event.target;
    switch (target.id) {
        case "redo":
            break;
        case "hint":
            break;
        case "next":
            break;
        case "reset":
            setBoard();
            break;
        default: break;
    }
});

const timer = document.getElementById('timer');

function startTimer() {
    start = Date.now();
    startInterval();
}

function stopTimer() {
    clearInterval(intervalId);
}

function startInterval() {
    let minutes = 0;
    let seconds = 0;
    let startTime = Date.now();

    intervalId = setInterval(() => {
        const now = Date.now();
        const delta = now - startTime;


        seconds = Math.floor(delta / 1000) % 60;
        minutes = Math.floor(delta / (1000 * 60));
        
        timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000); // Update every second
}

startTimer();