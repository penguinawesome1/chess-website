function updateHistory(pieceType, move, halfTurns) {
    console.log(pieceType);

    if (halfTurns % 2 === 1) {
        pieceType = pieceType.toUpperCase();
        if (pieceType === 'P') pieceType = '';
        const lastBox = historyContainer.children[historyContainer.children.length - 1];
        lastBox.textContent += ` ${pieceType}${move}`;
        return;
    }

    const fills = ['#FFD700', '#259625'],
        colors = ['4px solid #DAA520', '4px solid darkgreen'],
        box = document.createElement('div');
    
    box.classList.add('container3');
    box.style.backgroundColor = fills[(halfTurns / 2) % colors.length];
    box.style.borderBottom = colors[(halfTurns / 2) % colors.length];
    pieceType = pieceType.toUpperCase();
    if (pieceType === 'P') pieceType = '';
    box.textContent = `${halfTurns/2}. ${pieceType}${move}`;
    historyContainer.appendChild(box);
    historyContainer.scrollTop = historyContainer.scrollHeight;
}

const username1 = document.cookie
  .split("; ")
  .find((row) => row.startsWith("username1="))
  ?.split("=")[1];

const username2 = document.cookie
  .split("; ")
  .find((row) => row.startsWith("username2="))
  ?.split("=")[1];

const banner1 = document.getElementById('capturesWhite');
const banner2 = document.getElementById('capturesBlack');
if (username1) banner1.innerText = username1;
if (username2) banner2.innerText = username2;

let depth = 6;
document.addEventListener('click', (event) => {
    const target = event.target;
    switch (target.id) {
        case "game_mode":
            if (target.textContent === "Chess") {
                target.textContent = "Chess960";
            } else {
                target.textContent = "Chess";
            }
            break;
        case "opponent":
            const btnColor = document.getElementById("color");
            const btnDepth = document.getElementById("depth");
            if (target.textContent === "Player") {
                target.textContent = "Engine";
                btnColor.classList.remove(".off");
                btnDepth.classList.remove(".off");
            } else {
                target.textContent = "Player";
                btnColor.classList.add(".off");
                btnDepth.classList.add(".off");
            }
            break;
        case "color":
            if (target.textContent === "White") {
                target.innerHTML = "Black";
            } else {
                target.textContent = "White";
            }
            break;
        case "depth":
            ++depth;
            if (depth > 6) {
                depth = 1;
            }
            target.textContent = "Depth: " + depth;
            break;
        case "reset":
            setBoard();
            break;
        default: break;
    }
});